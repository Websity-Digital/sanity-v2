import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

import process from 'node:process'

const {KLAVIYO_API_KEY, KLAVIYO_LIST_ID} = process.env
if (typeof KLAVIYO_API_KEY !== 'string' || typeof KLAVIYO_LIST_ID !== 'string') {
  throw new Error('KLAVIYO_API_KEY and KLAVIYO_LIST_ID must be set')
}
const {
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_API_CONSUMER_KEY,
  TWITTER_API_CONSUMER_SECRET,
  MASTODON_ACCESS_TOKEN,
  MASTODON_HOST,
  BLUESKY_IDENTIFIER,
  BLUESKY_PASSWORD,
  BLUESKY_HOST,
  LINKEDIN_ACCESS_TOKEN,
  DISCORD_WEBHOOK_URL,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
  SLACK_BOT_TOKEN,
  SLACK_CHANNEL,
  DEVTO_API_KEY,
} = process.env

const crosspostEnvVars = {
  TWITTER_ACCESS_TOKEN_KEY: TWITTER_ACCESS_TOKEN_KEY || '',
  TWITTER_ACCESS_TOKEN_SECRET: TWITTER_ACCESS_TOKEN_SECRET || '',
  TWITTER_API_CONSUMER_KEY: TWITTER_API_CONSUMER_KEY || '',
  TWITTER_API_CONSUMER_SECRET: TWITTER_API_CONSUMER_SECRET || '',
  MASTODON_ACCESS_TOKEN: MASTODON_ACCESS_TOKEN || '',
  MASTODON_HOST: MASTODON_HOST || '',
  BLUESKY_IDENTIFIER: BLUESKY_IDENTIFIER || '',
  BLUESKY_PASSWORD: BLUESKY_PASSWORD || '',
  BLUESKY_HOST: BLUESKY_HOST || '',
  LINKEDIN_ACCESS_TOKEN: LINKEDIN_ACCESS_TOKEN || '',
  DISCORD_WEBHOOK_URL: DISCORD_WEBHOOK_URL || '',
  TELEGRAM_BOT_TOKEN: TELEGRAM_BOT_TOKEN || '',
  TELEGRAM_CHAT_ID: TELEGRAM_CHAT_ID || '',
  SLACK_BOT_TOKEN: SLACK_BOT_TOKEN || '',
  SLACK_CHANNEL: SLACK_CHANNEL || '',
  DEVTO_API_KEY: DEVTO_API_KEY || '',
}

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      type: 'sanity.function.document',
      name: 'klaviyo-campaign-create',
      memory: 1,
      timeout: 30,
      src: './functions/klaviyo-campaign-create',
      event: {
        on: ['create', 'update'],
        filter: "_type == 'emails' && status != 'sent'",
        projection:
            '{_id, _type, title, slug, body, marketingCampaign, klaviyoListId, "operation": delta::operation()}',
      },
      env: {
        KLAVIYO_API_KEY: KLAVIYO_API_KEY,
        KLAVIYO_LIST_ID: KLAVIYO_LIST_ID,
        KLAVIYO_FROM_EMAIL: process.env.KLAVIYO_FROM_EMAIL || 'noreply@yourdomain.com',
        KLAVIYO_REPLY_TO_EMAIL: process.env.KLAVIYO_REPLY_TO_EMAIL || 'reply-to@yourdomain.com',
        KLAVIYO_CC_EMAIL: process.env.KLAVIYO_CC_EMAIL || 'cc@yourdomain.com',
        KLAVIYO_BCC_EMAIL: process.env.KLAVIYO_BCC_EMAIL || 'bcc@yourdomain.com',
      },
    }),
    defineDocumentFunction({
      type: 'sanity.function.document',
      name: 'klaviyo-campaign-send',
      memory: 1,
      timeout: 30,
      src: './functions/klaviyo-campaign-send',
      event: {
        on: ['update'],
        filter: "_type == 'marketingCampaign' && status == 'ready'",
        projection: '{_id, _type, title, email, klaviyoCampaignId}',
      },
      env: {
        KLAVIYO_API_KEY: KLAVIYO_API_KEY,
      },
    }),

    defineDocumentFunction({
      type: 'sanity.function.document',
      name: 'social-media-crosspost',
      src: './functions/social-media-crosspost',
      memory: 2,
      timeout: 30,
      event: {
        on: ['create'],
        filter: "_type == 'socialPost'",
        projection: '{_id, body, mainImage, platforms, platformOverrides}',
      },
      env: crosspostEnvVars,
    }),
  ],
})