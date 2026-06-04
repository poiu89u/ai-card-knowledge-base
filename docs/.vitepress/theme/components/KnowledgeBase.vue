<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import { cards, categories, getLearningMeta, learningLevels, sourceLevels } from '../data/knowledge'

const query = ref('')
const activeLearningLevel = ref<(typeof learningLevels)[number]>('初学必看')
const activeCategory = ref<(typeof categories)[number]>('全部')
const activeQuality = ref<(typeof sourceLevels)[number]>('全部')
const randomMode = ref(false)
const randomSeed = ref(1)
const flippedCards = ref(new Set<string>())
const viewedCardIds = ref(new Set<string>())
const storageKey = 'ai-card-knowledge-viewed-v1'

const categoryDescriptions: Record<(typeof categories)[number], string> = {
  全部: '所有知识点',
  'AI 基础认知': '入门概念与基础名词',
  主流大模型体系: '模型、API 与能力区别',
  'AIGC 应用细分': '图像、视频与办公生成',
  'AI 配套技术': '命令行、依赖与部署',
  '前端 & 网页搭建': '页面、框架与卡片站',
  '数据 & 存储': '数据库、检索与缓存',
  'AI 行业 & 场景应用': '效率玩法与落地场景',
  进阶常识: 'Agent、MCP 与安全边界'
}

const sourceDescriptions: Record<(typeof sourceLevels)[number], string> = {
  全部: '不限来源状态',
  官方已核: '以官方文档为准',
  双源可追溯: '官方 + 正规解读',
  待人工复核: '后续继续校验'
}

const beginnerCards = computed(() => cards.filter((card) => getLearningMeta(card).level === '初学必看'))

const beginnerViewedCount = computed(() => {
  return beginnerCards.value.filter((card) => viewedCardIds.value.has(card.id)).length
})

const beginnerProgressPercent = computed(() => {
  if (beginnerCards.value.length === 0) return 0
  return Math.round((beginnerViewedCount.value / beginnerCards.value.length) * 100)
})

const advancedUnlocked = computed(() => beginnerViewedCount.value === beginnerCards.value.length)

const availableCards = computed(() => {
  return cards.filter((card) => {
    const meta = getLearningMeta(card)
    return meta.level === '初学必看' || advancedUnlocked.value
  })
})

const filteredCards = computed(() => {
  const normalizedQuery = query.value.trim().toLowerCase()

  return availableCards.value.filter((card) => {
    const learningMeta = getLearningMeta(card)
    const matchesLearningLevel = activeLearningLevel.value === '全部' || learningMeta.level === activeLearningLevel.value
    const matchesCategory = activeCategory.value === '全部' || card.category === activeCategory.value
    const matchesQuality = activeQuality.value === '全部' || card.sourceLevel === activeQuality.value
    const haystack = [
      card.title,
      card.category,
      learningMeta.level,
      learningMeta.learningGoal,
      learningMeta.prerequisites.join(' '),
      learningMeta.related.join(' '),
      learningMeta.next.join(' '),
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

    return matchesLearningLevel && matchesCategory && matchesQuality && (!normalizedQuery || haystack.includes(normalizedQuery))
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
  activeLearningLevel.value = advancedUnlocked.value ? '全部' : '初学必看'
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

function isViewed(id: string) {
  return viewedCardIds.value.has(id)
}

function markViewed(id: string) {
  const next = new Set(viewedCardIds.value)
  next.add(id)
  viewedCardIds.value = next
}

function clearLearningProgress() {
  viewedCardIds.value = new Set()
  activeLearningLevel.value = '初学必看'
}

function canUseLearningLevel(level: (typeof learningLevels)[number]) {
  return level !== '进阶必看' || advancedUnlocked.value
}

function setLearningLevel(level: (typeof learningLevels)[number]) {
  if (!canUseLearningLevel(level)) return
  activeLearningLevel.value = level
}

function hasLearningLinks(card: (typeof cards)[number]) {
  const meta = getLearningMeta(card)
  return meta.prerequisites.length > 0 || meta.related.length > 0 || meta.next.length > 0
}

onMounted(() => {
  try {
    const stored = window.localStorage.getItem(storageKey)
    if (stored) {
      viewedCardIds.value = new Set(JSON.parse(stored))
    }
  } catch {
    viewedCardIds.value = new Set()
  }
})

watch(viewedCardIds, (next) => {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify([...next]))
  } catch {
  }
})

watch(advancedUnlocked, (unlocked) => {
  if (!unlocked && activeLearningLevel.value === '进阶必看') {
    activeLearningLevel.value = '初学必看'
  }
})
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
      </div>
      <div class="kb-hero__panel" aria-label="知识库概览">
        <img
          class="kb-mascot kb-mascot--hero elephant-idle"
          :src="withBase('/images/elephant/welcome-wave.webp')"
          alt="挥手欢迎的蓝色小象"
        />
        <strong>AI 学习助手</strong>
        <small>先完成初学必看，再解锁进阶知识</small>
      </div>
    </section>

    <section class="kb-notice kb-notice--manual" aria-label="使用手册">
      <img
        class="kb-mascot kb-mascot--notice elephant-idle"
        :src="withBase('/images/elephant/tip-note.webp')"
        alt=""
      />
      <div>
        <strong>使用手册</strong>
        <ul class="kb-notice__list">
          <li><b>先学初学：</b>每张初学卡点“已看懂”，全部完成后才展示进阶。</li>
          <li><b>看关联：</b>卡片背面会显示前置知识、相关知识和下一步。</li>
          <li><b>再筛选：</b>用知识大类、来源状态和搜索缩小范围。</li>
          <li><b>再进阶：</b>解锁后学习 Agent、RAG、自动化、部署与协作。</li>
        </ul>
      </div>
      <a :href="withBase('/guide/source-checklist')">入库校验规则</a>
    </section>

    <section class="kb-controls" aria-label="筛选知识卡片">
      <div class="kb-learning-path" aria-label="学习路径">
        <div>
          <p class="kb-kicker">Learning Path</p>
          <h2>先完成初学必看，再进入进阶必看</h2>
          <p>
            初学进度 {{ beginnerViewedCount }} / {{ beginnerCards.length }}。进阶知识会在初学卡全部标记“已看懂”后展示。
          </p>
        </div>
        <div class="kb-progress-card">
          <span>{{ beginnerProgressPercent }}%</span>
          <div class="kb-progress-track" aria-hidden="true">
            <i :style="{ width: `${beginnerProgressPercent}%` }"></i>
          </div>
          <strong>{{ advancedUnlocked ? '进阶已解锁' : '进阶暂未解锁' }}</strong>
          <button type="button" @click="clearLearningProgress">重置学习进度</button>
        </div>
      </div>

      <div class="kb-level-tabs" aria-label="学习阶段">
        <button
          v-for="level in learningLevels"
          :key="level"
          :class="{ 'is-active': activeLearningLevel === level }"
          :disabled="!canUseLearningLevel(level)"
          type="button"
          @click="setLearningLevel(level)"
        >
          <span>{{ level }}</span>
          <small v-if="level === '初学必看'">先学核心概念</small>
          <small v-else-if="level === '进阶必看'">{{ advancedUnlocked ? '已解锁' : '完成初学后解锁' }}</small>
          <small v-else>{{ advancedUnlocked ? '全部已开放' : '当前只含初学' }}</small>
        </button>
      </div>

      <label class="kb-search">
        <span>检索知识点</span>
        <input v-model="query" type="search" placeholder="搜索 MCP、Image2、Docker、Embedding..." />
      </label>

      <div class="kb-toolbar" aria-label="快捷按钮">
        <button class="kb-action kb-action--primary" type="button" @click="shuffleCards">
          ✨ 随机换一组
        </button>
        <button class="kb-action kb-action--soft" type="button" @click="resetFilters">
          🧽 清空筛选
        </button>
      </div>

      <div class="kb-filter-group" aria-label="知识大类">
        <div class="kb-filter-heading">
          <strong>知识大类</strong>
          <span>按学习方向筛选，不同大类的边界更清楚。</span>
        </div>
        <div class="kb-filter kb-filter--category">
          <button
            v-for="category in categories"
            :key="category"
            :class="{ 'is-active': activeCategory === category }"
            type="button"
            @click="activeCategory = category"
          >
            <span>{{ category }}</span>
            <small>{{ categoryDescriptions[category] }}</small>
          </button>
        </div>
      </div>

      <div class="kb-filter-group" aria-label="来源状态">
        <div class="kb-filter-heading">
          <strong>来源状态</strong>
          <span>按可信度和复核进度筛选。</span>
        </div>
        <div class="kb-filter kb-filter--quality">
          <button
            v-for="quality in sourceLevels"
            :key="quality"
            :class="{ 'is-active': activeQuality === quality }"
            type="button"
            @click="activeQuality = quality"
          >
            <span>{{ quality }}</span>
            <small>{{ sourceDescriptions[quality] }}</small>
          </button>
        </div>
      </div>
    </section>

    <section class="kb-result-line" aria-live="polite">
      <span>当前显示 {{ visibleCards.length }} / {{ availableCards.length }} 张已开放卡片</span>
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
                <span>{{ getLearningMeta(card).level }}</span>
                <span>{{ card.category }}</span>
                <span>{{ card.sourceLevel }}</span>
              </div>
              <h2>{{ card.title }}</h2>
              <p class="knowledge-card__goal">{{ getLearningMeta(card).learningGoal }}</p>
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
              <button class="read-button" :class="{ 'is-read': isViewed(card.id) }" type="button" @click="markViewed(card.id)">
                {{ isViewed(card.id) ? '已看懂' : '标记已看懂' }}
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
              <div v-if="hasLearningLinks(card)" class="knowledge-card__links">
                <div v-if="getLearningMeta(card).prerequisites.length">
                  <strong>先学</strong>
                  <span v-for="item in getLearningMeta(card).prerequisites" :key="`pre-${card.id}-${item}`">{{ item }}</span>
                </div>
                <div v-if="getLearningMeta(card).related.length">
                  <strong>相关</strong>
                  <span v-for="item in getLearningMeta(card).related" :key="`rel-${card.id}-${item}`">{{ item }}</span>
                </div>
                <div v-if="getLearningMeta(card).next.length">
                  <strong>下一步</strong>
                  <span v-for="item in getLearningMeta(card).next" :key="`next-${card.id}-${item}`">{{ item }}</span>
                </div>
              </div>
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
