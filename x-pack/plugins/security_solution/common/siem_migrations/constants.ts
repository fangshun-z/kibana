/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const SIEM_MIGRATIONS_PATH = '/internal/siem_migrations' as const;
export const SIEM_RULE_MIGRATIONS_PATH = `${SIEM_MIGRATIONS_PATH}/rules` as const;

export const SIEM_RULE_MIGRATIONS_ALL_STATS_PATH = `${SIEM_RULE_MIGRATIONS_PATH}/stats` as const;
export const SIEM_RULE_MIGRATION_PATH = `${SIEM_RULE_MIGRATIONS_PATH}/{migration_id}` as const;
export const SIEM_RULE_MIGRATION_START_PATH = `${SIEM_RULE_MIGRATION_PATH}/start` as const;
export const SIEM_RULE_MIGRATION_RETRY_PATH = `${SIEM_RULE_MIGRATION_PATH}/retry` as const;
export const SIEM_RULE_MIGRATION_STATS_PATH = `${SIEM_RULE_MIGRATION_PATH}/stats` as const;
export const SIEM_RULE_MIGRATION_STOP_PATH = `${SIEM_RULE_MIGRATION_PATH}/stop` as const;

export const SIEM_RULE_MIGRATION_RESOURCES_PATH = `${SIEM_RULE_MIGRATION_PATH}/resources` as const;

export enum SiemMigrationStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export enum SiemMigrationRuleTranslationResult {
  FULL = 'full',
  PARTIAL = 'partial',
  UNTRANSLATABLE = 'untranslatable',
}
