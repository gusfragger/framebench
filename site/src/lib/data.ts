import type { BenchmarkResults, ModelRanking, BenchmarkMetadata } from '@/types'
import results from '@/data/results.json'

const data = results as BenchmarkResults

export function getRankings(): ModelRanking[] {
  return data.rankings
}

export function getMetadata(): BenchmarkMetadata {
  return data.metadata
}

export function getVendors(): string[] {
  return [...new Set(data.rankings.map((r) => r.vendor))]
}
