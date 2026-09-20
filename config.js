// ═══════════════════════════════════════════════════════════════
// ⚠️  CRYPTO PAYMENT CONFIGURATION
// ═══════════════════════════════════════════════════════════════
// Fill in ALL values below before deploying to production.
// Do NOT commit real credentials to version control.
// ═══════════════════════════════════════════════════════════════

export const CRYPTO_CONFIG = {
  // ─── WalletConnect / Reown AppKit ───
  // Register at https://cloud.reown.com to get your Project ID
  WALLETCONNECT_PROJECT_ID: '',

  // ─── Payment Receiving Addresses ───
  // Your TRON (TRC20) address for receiving USDT payments
  PAYMENT_USDT_TRC20_ADDRESS: '',

  // Your Ethereum address for receiving ETH payments
  PAYMENT_ETH_ADDRESS: '',

  // ─── USDT TRC20 Contract (Mainnet) ───
  // DO NOT CHANGE unless you know what you're doing
  USDT_TRC20_CONTRACT: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',

  // ─── Pricing ───
  PLANS: {
    '3m': { label: '3 Months', months: 3, priceUSD: 0.99 },
    '6m': { label: '6 Months', months: 6, priceUSD: 2.99 }
  },

  // ─── ETH Price API ───
  ETH_RATE_API: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  ETH_RATE_TTL_MS: 60000, // Cache ETH rate for 60 seconds

  // ─── Backend Verification (optional) ───
  // If you have a backend, set the endpoint URL here
  // The widget will POST { txHash, network, plan, amount } for verification
  BACKEND_VERIFY_URL: '',

  // ─── Metadata for WalletConnect ───
  APP_NAME: 'TikTok 18+ Premium',
  APP_DESCRIPTION: 'Premium access checkout',
  APP_URL: '', // Set to your production domain
  APP_ICON: ''  // Set to your app icon URL
};
