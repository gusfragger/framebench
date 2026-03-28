export interface BenchmarkMetadata {
  version: string
  questionCount: number
  categories: string[]
  timestamp: string
  totalModels: number
}

export interface CategoryScores {
  'frame-data': number
  'mechanics': number
  'domain-jargon': number
  'ambiguous-mechanics': number
}

export interface ModelRanking {
  model: string
  vendor: string
  logoKey: string
  accuracyPct: number
  costPer1MTokens: number
  throughputTPS: number
  categoryScores: CategoryScores
}

export interface BenchmarkResults {
  metadata: BenchmarkMetadata
  rankings: ModelRanking[]
}
