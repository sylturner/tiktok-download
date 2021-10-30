module.exports.bot = {
  "id": process.env.BOT_ID,
  "token": process.env.BOT_TOKEN,
  "publicKey": process.env.BOT_PUBLIC_KEY
}

module.exports.owner = {
  "tag": process.env.OWNER_TAG,
  "id": process.env.OWNER_ID,
  "server": process.env.OWNER_SERVER
}

module.exports.compression = {
  "max_size": process.env.COMPRESSION_MAX_SIZE || 8388119,
  "audio_bitrate": process.env.COMPRESSION_AUDIO_BITRATE || 64,
  "restrict": (process.env.COMPRESSION_RESTRICT || 'false').toLowerCase() === 'true',
  "servers": (process.env.COMPRESSION_SERVERS || '').split(',').filter(String)
}

module.exports.tiktok = {
  "proxies": (process.env.TIKTOK_PROXIES || '').split(',').filter(String),
  "sessions": (process.env.TIKTOK_SESSIONS || '').split(',').filter(String)
}

module.exports.emojis = {
  "tiktok": process.env.EMOJIS_TIKTOK || "859225749281308702",
  "github": process.env.EMOJIS_GITHUB || "860239859972440064",
  "discord": process.env.EMOJIS_DISCORD || "869007508755341392"
}

module.exports.status = process.env.BOT_STATUS || "/help"

module.exports.mongo = process.env.MONGO_URI

module.exports.relativeDownloadPath = process.env.RELATIVE_DOWNLOAD_PATH || 'other/downloads'
