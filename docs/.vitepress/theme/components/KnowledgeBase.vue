<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { cards, categories, sourceLevels } from '../data/knowledge'

const query = ref('')
const activeCategory = ref<(typeof categories)[number]>('全部')
const activeQuality = ref<(typeof sourceLevels)[number]>('全部')
const randomMode = ref(false)
const randomSeed = ref(1)
const flippedCards = ref(new Set<string>())

const filteredCards = computed(() => {
  const normalizedQuery = query.value.trim().toLowerCase()

  return cards.filter((card) => {
    const matchesCategory = activeCategory.value === '全部' || card.category === activeCategory.value
    const matchesQuality = activeQuality.value === '全部' || card.sourceLevel === activeQuality.value
    const haystack = [
      card.title,
      card.category,
      card.summary,
      card.plain,
      card.officialPoint,
      card.beginnerTakeaway,
      card.caution,
      card.sourceName,
      card.tags.join(' '),
      card.useCases.join(' ')
    ]
      .join(' ')
      .toLowerCase()

    return matchesCategory && matchesQuality && (!normalizedQuery || haystack.includes(normalizedQuery))
  })
})

const visibleCards = computed(() => {
  if (!randomMode.value) return filteredCards.value

  return [...filteredCards.value].sort((left, right) => {
    return hashCard(left.id, randomSeed.value) - hashCard(right.id, randomSeed.value)
  })
})

function hashCard(id: string, seed: number) {
  let hash = seed * 97
  for (const char of id) hash = (hash * 31 + char.charCodeAt(0)) % 100000
  return hash
}

function shuffleCards() {
  randomMode.value = true
  randomSeed.value += 1
  flippedCards.value = new Set()
}

function resetFilters() {
  query.value = ''
  activeCategory.value = '全部'
  activeQuality.value = '全部'
  randomMode.value = false
  flippedCards.value = new Set()
}

function toggleFlip(id: string) {
  const next = new Set(flippedCards.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  flippedCards.value = next
}

function isFlipped(id: string) {
  return flippedCards.value.has(id)
}
</script>

<template>
  <main class="kb-shell">
    <section class="kb-hero">
      <div class="kb-hero__copy">
        <p class="kb-kicker">AI Knowledge System</p>
        <h1>AI 通识卡片库</h1>
        <p>
          用统一卡片沉淀 AI、开发、数据库、前端与运维知识。每张卡都拆成官方要点、小白解释、使用场景和注意边界。
        </p>
        <div class="kb-hero__actions" aria-label="首页快捷操作">
          <button class="kb-action kb-action--primary" type="button" @click="shuffleCards">
            ✨ 随机换一组
          </button>
          <button class="kb-action kb-action--soft" type="button" @click="resetFilters">
            🧽 清空筛选
          </button>
        </div>
      </div>
      <div class="kb-hero__panel" aria-label="知识库概览">
        <img
          class="kb-mascot kb-mascot--hero elephant-idle"
          :src="withBase('/images/elephant/welcome-wave.webp')"
          alt="挥手欢迎的蓝色小象"
        />
        <span>{{ cards.length }}</span>
        <strong>张官方来源卡片</strong>
        <small>点击卡片可翻面</small>
      </div>
    </section>

    <section class="kb-notice" aria-label="公告">
      <img
        class="kb-mascot kb-mascot--notice elephant-idle"
        :src="withBase('/images/elephant/tip-note.webp')"
        alt=""
      />
      <div>
        <strong>公告</strong>
        <p>
          现在可交互的地方已经全部做成彩色按钮：搜索会实时过滤，分类会收窄范围，随机按钮会洗牌，卡片上的“翻到背面”会显示官方来源和避坑说明。
        </p>
      </div>
      <a :href="withBase('/guide/source-checklist')">查看入库校验规则</a>
    </section>

    <section class="kb-manual" aria-label="使用手册">
      <img :src="withBase('/images/manual-image2.png')" alt="AI 知识卡片库使用手册插图" loading="lazy" />
      <div class="kb-manual__copy">
        <p class="kb-kicker">Quick Manual</p>
        <h2>使用手册</h2>
        <ul>
          <li><strong>搜一搜：</strong>输入关键词，卡片会实时变少。</li>
          <li><strong>点分类：</strong>只看 AI 图像、Agent、数据库等一个方向。</li>
          <li><strong>看背面：</strong>点“翻到背面”，查看官方要点、误区和来源。</li>
          <li><strong>随机学：</strong>点“随机换一组”，首页会重新排列知识点。</li>
        </ul>
      </div>
      <img
        class="kb-mascot kb-mascot--manual elephant-idle"
        :src="withBase('/images/elephant/reading.webp')"
        alt=""
        loading="lazy"
      />
    </section>

    <section class="kb-controls" aria-label="筛选知识卡片">
      <label class="kb-search">
        <span>检索知识点</span>
        <input v-model="query" type="search" placeholder="搜索 MCP、Image2、Docker、Embedding..." />
      </label>

      <div class="kb-toolbar" aria-label="快捷按钮">
        <button class="kb-action kb-action--primary" type="button" @click="shuffleCards">
          🎲 随机知识点
        </button>
        <button class="kb-action kb-action--soft" type="button" @click="resetFilters">
          ↺ 恢复全部
        </button>
      </div>

      <div class="kb-filter" aria-label="分类">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ 'is-active': activeCategory === category }"
          type="button"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="kb-filter kb-filter--quality" aria-label="来源状态">
        <button
          v-for="quality in sourceLevels"
          :key="quality"
          :class="{ 'is-active': activeQuality === quality }"
          type="button"
          @click="activeQuality = quality"
        >
          {{ quality }}
        </button>
      </div>
    </section>

    <section class="kb-result-line" aria-live="polite">
      <span>当前显示 {{ visibleCards.length }} / {{ cards.length }} 张卡片</span>
      <span v-if="randomMode">随机模式已开启</span>
    </section>

    <section class="kb-grid" aria-label="知识卡片列表">
      <article
        v-for="card in visibleCards"
        :key="card.id"
        class="knowledge-card"
        :class="{ 'is-flipped': isFlipped(card.id) }"
      >
        <div class="knowledge-card__inner">
          <div class="knowledge-card__face knowledge-card__front">
            <img :src="withBase(card.image)" :alt="card.title" loading="lazy" />
            <div class="knowledge-card__body">
              <div class="knowledge-card__meta">
                <span>{{ card.category }}</span>
                <span>{{ card.sourceLevel }}</span>
              </div>
              <h2>{{ card.title }}</h2>
              <p class="knowledge-card__summary">{{ card.summary }}</p>
              <p class="knowledge-card__plain">{{ card.plain }}</p>
              <div class="knowledge-card__uses">
                <strong>场景</strong>
                <span>{{ card.useCases.join(' / ') }}</span>
              </div>
              <div class="knowledge-card__tags">
                <span v-for="tag in card.tags" :key="tag">{{ tag }}</span>
              </div>
              <footer>
                <span>{{ card.version }}</span>
                <time :datetime="card.updated">{{ card.updated }}</time>
              </footer>
              <button class="flip-button" type="button" @click="toggleFlip(card.id)">
                翻到背面
              </button>
            </div>
          </div>

          <div class="knowledge-card__face knowledge-card__back">
            <div class="knowledge-card__body">
              <div class="knowledge-card__meta">
                <span>官方来源</span>
                <span>{{ card.updated }}</span>
              </div>
              <h2>{{ card.title }}</h2>
              <dl class="knowledge-card__dl">
                <div>
                  <dt>官方要点</dt>
                  <dd>{{ card.officialPoint }}</dd>
                </div>
                <div>
                  <dt>小白记法</dt>
                  <dd>{{ card.beginnerTakeaway }}</dd>
                </div>
                <div>
                  <dt>别误会</dt>
                  <dd>{{ card.caution }}</dd>
                </div>
              </dl>
              <a class="source-link" :href="card.sourceUrl" target="_blank" rel="noreferrer">
                打开官方来源：{{ card.sourceName }}
              </a>
              <button class="flip-button flip-button--back" type="button" @click="toggleFlip(card.id)">
                回到正面
              </button>
            </div>
          </div>
        </div>
      </article>

      <div v-if="visibleCards.length === 0" class="kb-empty">
        <img :src="withBase('/images/elephant/empty-peek.webp')" alt="" loading="lazy" />
        <p>没有匹配卡片，换个关键词试试。</p>
      </div>
    </section>
  </main>
</template>
