// ═══════════════════════════════════════════════════════════════
// MULTI-LANGUAGE TRANSLATION DICTIONARY & DETECTOR (15 LANGUAGES)
// ═══════════════════════════════════════════════════════════════

export const SUPPORTED_LANGS = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'sr', name: 'Srpski', flag: '🇷🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' }
];

export const TRANSLATIONS = {
  en: {
    nav: { watchOnline: 'Watch Online', features: 'Features', access: 'Access' },
    hero: {
      eyebrow: 'TikTok 18+ · Adults Only (+18)',
      title: 'TikTok for <br><em>Adults</em>',
      desc: 'Hot uncensored short videos with zero restrictions. Erotic content, private live streams, and an exclusive feed — everything like TikTok, but strictly 18+.',
      btnWatch: 'Watch Online',
      btnExplore: 'Explore Features',
      live: 'Live 1080p',
      devices: 'Mobile & PC',
      anonymous: '100% Anonymous & Secure'
    },
    stats: {
      users: 'Active Users',
      videos: 'Hot Videos',
      label18: 'Adults Only',
      satisfaction: 'Satisfaction'
    },
    features: {
      tag: 'EXCLUSIVE FEATURES',
      title: 'Next-generation 18+ streaming',
      desc: 'Experience the most candid adult content platform created for total discretion and premium quality.',
      item1Title: 'Uncensored Live Streaming',
      item1Desc: 'Real-time broadcasting with full interaction, candid shows, and private VIP rooms.',
      item2Title: 'Smart Recommendation Feed',
      item2Desc: 'AI algorithm curates the hottest clips tailored specifically to your taste.',
      item3Title: 'HD Video Quality',
      item3Desc: 'Crystal-clear 1080p streaming optimized for seamless playback on any device.',
      item4Title: 'Direct Creator Interaction',
      item4Desc: 'Chat, send reactions, and request private shows directly during streams.',
      item5Title: 'Ultra Fast Loading',
      item5Desc: 'Zero buffering video architecture with adaptive streaming bitrates.',
      item6Title: 'Daily New Content',
      item6Desc: 'Thousands of fresh videos and streams added around the clock.',
      item7Title: '100% Anonymous Mode',
      item7Desc: 'Total privacy guaranteed: watch everything without history or tracking.',
      item8Title: 'Direct In-Browser Playback',
      item8Desc: 'Instant access on any mobile phone or desktop without app installation.'
    },
    steps: {
      tag: 'HOW TO ACCESS',
      title: 'Start watching in less than 1 minute',
      step1Title: 'Tap «Watch Online»',
      step1Desc: 'Press the instant access button',
      step2Title: 'Choose Access Plan',
      step2Desc: 'Select 3 or 6 months period',
      step3Title: 'Select Payment',
      step3Desc: 'Pay securely with ETH',
      step4Title: 'Connect Wallet',
      step4Desc: 'Confirm transaction in 1 click',
      step5Title: 'Enjoy The Show!',
      step5Desc: 'Endless uncensored videos and streams'
    },
    banner: {
      tag: '1-CLICK PREMIUM ACCESS',
      title: 'Unlimited Access to <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Instant unrestricted access to all uncensored videos and private live streams. Pay securely with Ethereum.',
      plan3m: '3 months — $0.99',
      plan6m: '6 months — $2.99',
      bestValue: 'BEST VALUE',
      btn: 'Get Instant Access'
    },
    widget: {
      title: '🔓 UNLIMITED ACCESS',
      subtitle: 'Choose your access period',
      plan3m: '3 MONTHS',
      plan6m: '6 MONTHS',
      unlimited: 'Unlimited Access',
      bestValue: 'BEST VALUE',
      selectPayment: 'SELECT PAYMENT METHOD',
      usdt: 'USDT',
      tron: 'TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'ETH Network',
      warning: 'Please make sure your wallet is connected to the selected network.',
      connectBtn: 'CONNECT WALLET',
      secure: 'Secure connection via WalletConnect',
      connected: 'Wallet connected',
      plan: 'Plan',
      network: 'Network',
      crypto: 'Cryptocurrency',
      total: 'Total Due',
      payBtn: 'Proceed to Payment',
      statusConnecting: 'Connecting wallet...',
      statusConnectingDesc: 'Initializing secure WalletConnect session...',
      statusWaiting: 'Waiting for confirmation',
      statusWaitingDesc: 'Please confirm the transaction in your wallet.',
      statusVerifying: 'Verifying transaction...',
      statusVerifyingDesc: 'Waiting for blockchain confirmation.',
      statusConfirmed: 'Payment Confirmed ✓',
      statusActivated: 'Unlimited access activated',
      continueBtn: 'Continue',
      errorTitle: 'Payment Failed',
      errorDesc: 'An error occurred while processing the transaction.',
      retryBtn: 'Try Again'
    },
    cta: {
      tag: 'INSTANT ONLINE ACCESS',
      title: 'Ready for the <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">hottest shows?</em>',
      desc: 'Enter TikTok 18+ online now and immerse yourself in the boldest video universe. Hundreds of creators streaming live right now.',
      btn: 'Watch Online',
      caption: 'Live Streaming · Adults Only (+18) · 100% Private & Discrete'
    },
    footer: {
      copy: '© 2026 TikTok 18+. All rights reserved. Adults only.',
      features: 'Features',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use'
    }
  },

  ru: {
    nav: { watchOnline: 'Смотреть онлайн', features: 'Возможности', access: 'Доступ' },
    hero: {
      eyebrow: 'TikTok 18+ · Только для взрослых (+18)',
      title: 'TikTok для <br><em>взрослых</em>',
      desc: 'Горячие видеоролики без цензуры и ограничений. Эротический контент, приватные прямые эфиры и эксклюзивная лента — всё как в TikTok, но строго 18+.',
      btnWatch: 'Смотреть онлайн',
      btnExplore: 'Возможности',
      live: 'Эфир 1080p',
      devices: 'Телефон и ПК',
      anonymous: '100% анонимно и безопасно'
    },
    stats: {
      users: 'Активных пользователей',
      videos: 'Горячих видео',
      label18: 'Только 18+',
      satisfaction: 'Довольных клиентов'
    },
    features: {
      tag: 'ЭКСКЛЮЗИВНЫЕ ВОЗМОЖНОСТИ',
      title: 'Стриминг 18+ нового поколения',
      desc: 'Откройте для себя самую откровенную платформу контента для взрослых с полной приватностью и премиальным качеством.',
      item1Title: 'Прямые трансляции без цензуры',
      item1Desc: 'Эфиры в реальном времени с полным интерактивом, откровенными шоу и приватными VIP-комнатами.',
      item2Title: 'Умная лента рекомендаций',
      item2Desc: 'Искусственный интеллект подбирает самые горячие видео специально под ваши предпочтения.',
      item3Title: 'HD качество видео',
      item3Desc: 'Кристально чистое видео 1080p для плавного просмотра на любом смартфоне или компьютере.',
      item4Title: 'Прямой контакт с авторами',
      item4Desc: 'Общайтесь в чате, отправляйте реакции и заказывайте приватные шоу прямо во время стрима.',
      item5Title: 'Сверхбыстрая загрузка',
      item5Desc: 'Воспроизведение без задержек и буферизации с адаптивным качеством потока.',
      item6Title: 'Ежедневные обновления',
      item6Desc: 'Тысячи новых видеороликов и стримов добавляются каждый день круглосуточно.',
      item7Title: '100% анонимный режим',
      item7Desc: 'Полная конфиденциальность: смотрите без сохранения истории и следов.',
      item8Title: 'Просмотр прямо в браузере',
      item8Desc: 'Мгновенный запуск в браузере телефона или ноутбука без установки сторонних приложений.'
    },
    steps: {
      tag: 'КАК ПОЛУЧИТЬ ДОСТУП',
      title: 'Начните просмотр менее чем за 1 минуту',
      step1Title: 'Нажмите «Смотреть онлайн»',
      step1Desc: 'Нажмите кнопку мгновенного доступа',
      step2Title: 'Выберите период',
      step2Desc: 'Тариф на 3 или 6 месяцев',
      step3Title: 'Выберите валюту',
      step3Desc: 'Оплата в Ethereum',
      step4Title: 'Подключите кошелёк',
      step4Desc: 'Подтвердите перевод в 1 клик',
      step5Title: 'Приятного просмотра!',
      step5Desc: 'Тысячи стримов и видео без ограничений'
    },
    banner: {
      tag: 'ПРЕМИУМ ДОСТУП В 1 КЛИК',
      title: 'Неограниченный доступ <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Мгновенный закрытый доступ ко всем видео и приватным трансляциям без цензуры. Оплата в Ethereum.',
      plan3m: '3 месяца — $0.99',
      plan6m: '6 месяцев — $2.99',
      bestValue: 'ВЫГОДНЕЕ',
      btn: 'Оформить доступ'
    },
    widget: {
      title: '🔓 НЕОГРАНИЧЕННЫЙ ДОСТУП',
      subtitle: 'Выберите период доступа',
      plan3m: '3 МЕСЯЦА',
      plan6m: '6 МЕСЯЦЕВ',
      unlimited: 'Unlimited Access',
      bestValue: 'ВЫГОДНЕЕ',
      selectPayment: 'ВЫБЕРИТЕ СПОСОБ ОПЛАТЫ',
      usdt: 'USDT',
      tron: 'TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'ETH Network',
      warning: 'Проверьте, что ваш кошелёк подключён к выбранной сети.',
      connectBtn: 'ПОДКЛЮЧИТЬ КОШЕЛЁК',
      secure: 'Безопасное подключение через WalletConnect',
      connected: 'Кошелёк подключён',
      plan: 'Тариф',
      network: 'Сеть',
      crypto: 'Криптовалюта',
      total: 'К оплате',
      payBtn: 'Перейти к оплате',
      statusConnecting: 'Подключение кошелька...',
      statusConnectingDesc: 'Инициализация безопасного подключения через WalletConnect...',
      statusWaiting: 'Ожидание подтверждения',
      statusWaitingDesc: 'Подтвердите транзакцию в вашем кошельке.',
      statusVerifying: 'Проверяем транзакцию...',
      statusVerifyingDesc: 'Ожидаем подтверждение в блокчейне.',
      statusConfirmed: 'Оплата подтверждена ✓',
      statusActivated: 'Неограниченный доступ активирован',
      continueBtn: 'Продолжить',
      errorTitle: 'Не удалось выполнить оплату',
      errorDesc: 'Произошла ошибка при обработке транзакции.',
      retryBtn: 'Попробовать снова'
    },
    cta: {
      tag: 'ПРЯМОЙ ДОСТУП ОНЛАЙН',
      title: 'Готовы к самому <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">горячему?</em>',
      desc: 'Войдите в TikTok 18+ онлайн прямо сейчас и погрузитесь в мир самых смелых видео. Сотни авторов ведут прямой эфир прямо в эту минуту.',
      btn: 'Смотреть онлайн',
      caption: 'Прямой эфир · Только для взрослых (+18) · 100% анонимно'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Все права защищены. Только для взрослых.',
      features: 'Возможности',
      privacy: 'Конфиденциальность',
      terms: 'Условия использования'
    }
  },

  es: {
    nav: { watchOnline: 'Ver online', features: 'Características', access: 'Acceso' },
    hero: {
      eyebrow: 'TikTok 18+ · Solo Adultos (+18)',
      title: 'TikTok para <br><em>adultos</em>',
      desc: 'Videos cortos candentes sin censura ni restricciones. Contenido erótico, transmisiones privadas y un feed exclusivo — todo como en TikTok, pero 18+.',
      btnWatch: 'Ver online',
      btnExplore: 'Descubrir más',
      live: 'En vivo 1080p',
      devices: 'Móvil y PC',
      anonymous: '100% Anónimo y Seguro'
    },
    stats: {
      users: 'Usuarios activos',
      videos: 'Videos candentes',
      label18: 'Solo 18+',
      satisfaction: 'Satisfacción'
    },
    features: {
      tag: 'CARACTERÍSTICAS EXCLUSIVAS',
      title: 'Streaming 18+ de nueva generación',
      desc: 'Experimenta la plataforma para adultos más atrevida creada para total discreción y máxima calidad.',
      item1Title: 'Transmisiones en vivo sin censura',
      item1Desc: 'Emisiones en directo con interacción total, espectáculos atrevidos y salas VIP privadas.',
      item2Title: 'Feed inteligente de recomendaciones',
      item2Desc: 'El algoritmo de IA selecciona los videos más candentes según tus preferencias.',
      item3Title: 'Calidad de video HD',
      item3Desc: 'Transmisión fluida a 1080p optimizada para cualquier celular o computadora.',
      item4Title: 'Interacción directa con creadores',
      item4Desc: 'Chatea, envía reacciones y solicita shows privados durante la emisión.',
      item5Title: 'Carga ultrarrápida',
      item5Desc: 'Reproducción instantánea sin pausas ni cortes con bitrate adaptativo.',
      item6Title: 'Contenido nuevo diario',
      item6Desc: 'Miles de videos frescos y directos añadidos las 24 horas del día.',
      item7Title: 'Modo 100% anónimo',
      item7Desc: 'Privacidad total garantizada: mira todo sin historial ni registros.',
      item8Title: 'Reproducción directa en navegador',
      item8Desc: 'Acceso directo desde cualquier navegador sin necesidad de descargar aplicaciones.'
    },
    steps: {
      tag: 'CÓMO ACCEDER',
      title: 'Comienza a ver en menos de 1 minuto',
      step1Title: 'Toca «Ver online»',
      step1Desc: 'Presiona el botón de acceso inmediato',
      step2Title: 'Elige tu plan',
      step2Desc: 'Periodo de 3 o 6 meses',
      step3Title: 'Selecciona la moneda',
      step3Desc: 'Pago seguro con Ethereum',
      step4Title: 'Conecta tu billetera',
      step4Desc: 'Confirma la transacción con 1 clic',
      step5Title: '¡Disfruta del show!',
      step5Desc: 'Videos y transmisiones sin fin'
    },
    banner: {
      tag: 'ACCESO PREMIUM EN 1 CLIC',
      title: 'Acceso ilimitado a <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Acceso inmediato sin censura a todos los videos y directos privados. Paga con Ethereum.',
      plan3m: '3 meses — $0.99',
      plan6m: '6 meses — $2.99',
      bestValue: 'MÁS POPULAR',
      btn: 'Obtener acceso'
    },
    widget: {
      title: '🔓 ACCESO ILIMITADO',
      subtitle: 'Elige tu periodo de acceso',
      plan3m: '3 MESES',
      plan6m: '6 MESES',
      unlimited: 'Acceso Ilimitado',
      bestValue: 'MÁS POPULAR',
      selectPayment: 'ELIGE EL MÉTODO DE PAGO',
      usdt: 'USDT',
      tron: 'TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'Red Ethereum',
      warning: 'Asegúrate de que tu billetera esté conectada a la red correcta.',
      connectBtn: 'CONECTAR BILLETERA',
      secure: 'Conexión segura mediante WalletConnect',
      connected: 'Billetera conectada',
      plan: 'Plan',
      network: 'Red',
      crypto: 'Criptomoneda',
      total: 'Total a pagar',
      payBtn: 'Proceder al pago',
      statusConnecting: 'Conectando billetera...',
      statusConnectingDesc: 'Iniciando sesión segura con WalletConnect...',
      statusWaiting: 'Esperando confirmación',
      statusWaitingDesc: 'Por favor confirma la transacción en tu billetera.',
      statusVerifying: 'Verificando transacción...',
      statusVerifyingDesc: 'Esperando confirmación en blockchain.',
      statusConfirmed: 'Pago Confirmado ✓',
      statusActivated: 'Acceso ilimitado activado',
      continueBtn: 'Continuar',
      errorTitle: 'Error en el pago',
      errorDesc: 'Ocurrió un error al procesar la transacción.',
      retryBtn: 'Intentar de nuevo'
    },
    cta: {
      tag: 'ACCESO DIRECTO ONLINE',
      title: '¿Listo para lo más <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">candente?</em>',
      desc: 'Entra a TikTok 18+ online y sumérgete en el universo de videos más atrevido. Cientos de creadores transmitiendo en vivo en este momento.',
      btn: 'Ver online',
      caption: 'Transmisión en Vivo · Solo Mayores de 18 Años · 100% Discreto'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Todos los derechos reservados. Solo para adultos.',
      features: 'Características',
      privacy: 'Privacidad',
      terms: 'Términos de Uso'
    }
  },

  de: {
    nav: { watchOnline: 'Online ansehen', features: 'Funktionen', access: 'Zugang' },
    hero: {
      eyebrow: 'TikTok 18+ · Nur für Erwachsene (+18)',
      title: 'TikTok für <br><em>Erwachsene</em>',
      desc: 'Heiße, unzensierte Kurzvideos ohne Einschränkungen. Erotische Inhalte, private Livestreams und ein exklusiver Feed — wie TikTok, aber streng ab 18.',
      btnWatch: 'Online ansehen',
      btnExplore: 'Mehr erfahren',
      live: 'Live 1080p',
      devices: 'Smartphone & PC',
      anonymous: '100% Anonym & Sicher'
    },
    stats: {
      users: 'Aktive Nutzer',
      videos: 'Heiße Videos',
      label18: 'Nur 18+',
      satisfaction: 'Zufriedenheit'
    },
    features: {
      tag: 'EXKLUSIVE FUNKTIONEN',
      title: '18+ Streaming der nächsten Generation',
      desc: 'Erleben Sie die heißeste Plattform für Erwachsene mit absoluter Diskretion und erstklassiger Qualität.',
      item1Title: 'Unzensiertes Live-Streaming',
      item1Desc: 'Echtzeit-Übertragungen mit voller Interaktion, heißen Shows und privaten VIP-Räumen.',
      item2Title: 'Intelligenter Empfehlungs-Feed',
      item2Desc: 'KI-Algorithmus wählt die besten Clips genau nach Ihren Wünschen aus.',
      item3Title: 'HD-Videoqualität',
      item3Desc: 'Kristallklares 1080p-Streaming, optimiert für jedes Smartphone oder Tablet.',
      item4Title: 'Direkte Interaktion mit Schöpfern',
      item4Desc: 'Chatten, Reaktionen senden und private Shows direkt im Stream anfragen.',
      item5Title: 'Ultraschnelles Laden',
      item5Desc: 'Sofortige Wiedergabe ohne Verzögerung mit adaptivem Streaming.',
      item6Title: 'Täglich neue Inhalte',
      item6Desc: 'Tausende neue Videos und Livestreams rund um die Uhr hinzugefügt.',
      item7Title: '100% Anonymer Modus',
      item7Desc: 'Vollständige Privatsphäre: Schauen ohne Historie oder Spuren.',
      item8Title: 'Direkt im Browser abspielen',
      item8Desc: 'Sofortiger Zugriff im mobilen Browser ohne Download von Apps.'
    },
    steps: {
      tag: 'SO FUNKTIONIERT ES',
      title: 'In weniger als 1 Minute ansehen',
      step1Title: 'Tippe auf «Online ansehen»',
      step1Desc: 'Sofortzugang-Taste drücken',
      step2Title: 'Tarif wählen',
      step2Desc: '3 oder 6 Monate auswählen',
      step3Title: 'Zahlung wählen',
      step3Desc: 'Sicher mit der ETH bezahlen',
      step4Title: 'Wallet verbinden',
      step4Desc: 'Transaktion mit 1 Klick bestätigen',
      step5Title: 'Show genießen!',
      step5Desc: 'Endlose Videos und Livestreams'
    },
    banner: {
      tag: '1-KLICK PREMIUM-ZUGANG',
      title: 'Unbegrenzter Zugang zu <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Sofortiger uneingeschränkter Zugang zu allen unzensierten Videos und privaten Streams. Bezahlen mit der Ethereum.',
      plan3m: '3 Monate — $0.99',
      plan6m: '6 Monate — $2.99',
      bestValue: 'BESTER WERT',
      btn: 'Jetzt Zugang sichern'
    },
    widget: {
      title: '🔓 UNBEGRENZTER ZUGANG',
      subtitle: 'Wählen Sie Ihren Zugangszeitraum',
      plan3m: '3 MONATE',
      plan6m: '6 MONATE',
      unlimited: 'Unbegrenzter Zugang',
      bestValue: 'BESTER WERT',
      selectPayment: 'ZAHLUNGSMETHODE WÄHLEN',
      usdt: 'USDT',
      tron: 'TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'ETH-Netzwerk',
      warning: 'Stellen Sie sicher, dass Ihre Wallet mit dem richtigen Netzwerk verbunden ist.',
      connectBtn: 'WALLET VERBINDEN',
      secure: 'Sichere Verbindung über WalletConnect',
      connected: 'Wallet verbunden',
      plan: 'Tarif',
      network: 'Netzwerk',
      crypto: 'Kryptowährung',
      total: 'Gesamtbetrag',
      payBtn: 'Zur Zahlung',
      statusConnecting: 'Wallet wird verbunden...',
      statusConnectingDesc: 'Sichere WalletConnect-Sitzung wird initialisiert...',
      statusWaiting: 'Warten auf Bestätigung',
      statusWaitingDesc: 'Bitte bestätigen Sie die Transaktion in Ihrer Wallet.',
      statusVerifying: 'Transaktion wird überprüft...',
      statusVerifyingDesc: 'Warten auf Bestätigung in der Blockchain.',
      statusConfirmed: 'Zahlung bestätigt ✓',
      statusActivated: 'Unbegrenzter Zugang aktiviert',
      continueBtn: 'Fortfahren',
      errorTitle: 'Zahlung fehlgeschlagen',
      errorDesc: 'Bei der Transaktion ist ein Fehler aufgetreten.',
      retryBtn: 'Erneut versuchen'
    },
    cta: {
      tag: 'DIREKTER ONLINE-ZUGANG',
      title: 'Bereit für die <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">heißeste Show?</em>',
      desc: 'Betreten Sie TikTok 18+ online und tauchen Sie ein in die aufregendste Videowelt. Hunderte Darsteller streamen gerade live.',
      btn: 'Online ansehen',
      caption: 'Live-Streaming · Nur ab 18 Jahren · 100% Privat & Diskret'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Alle Rechte vorbehalten. Nur für Erwachsene.',
      features: 'Funktionen',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen'
    }
  },

  pt: {
    nav: { watchOnline: 'Assistir online', features: 'Recursos', access: 'Acesso' },
    hero: {
      eyebrow: 'TikTok 18+ · Apenas Adultos (+18)',
      title: 'TikTok para <br><em>Adultos</em>',
      desc: 'Vídeos curtos e picantes sem censura nem restrições. Conteúdo erótico, transmissões ao vivo privadas e feed exclusivo — tudo como no TikTok, mas estritamente 18+.',
      btnWatch: 'Assistir online',
      btnExplore: 'Ver recursos',
      live: 'Ao vivo 1080p',
      devices: 'Celular e PC',
      anonymous: '100% Anônimo e Seguro'
    },
    stats: {
      users: 'Usuários ativos',
      videos: 'Vídeos quentes',
      label18: 'Apenas 18+',
      satisfaction: 'Satisfação'
    },
    features: {
      tag: 'RECURSOS EXCLUSIVOS',
      title: 'Streaming adulto de nova geração',
      desc: 'Experimente a plataforma adulta mais ousada, criada para total discrição e qualidade máxima.',
      item1Title: 'Transmissões ao vivo sem censura',
      item1Desc: 'Transmissões em tempo real com interação completa e salas VIP privadas.',
      item2Title: 'Feed inteligente de recomendações',
      item2Desc: 'Algoritmo com IA seleciona os melhores clipes feitos sob medida para você.',
      item3Title: 'Qualidade de vídeo HD',
      item3Desc: 'Transmissão em 1080p nítida e otimizada para qualquer smartphone ou PC.',
      item4Title: 'Interação direta com criadores',
      item4Desc: 'Converse no chat, envie reações e solicite shows privados ao vivo.',
      item5Title: 'Carregamento ultrarrápido',
      item5Desc: 'Reprodução instantânea sem travamentos com bitrate adaptável.',
      item6Title: 'Novos conteúdos diários',
      item6Desc: 'Milhares de vídeos e transmissões novas adicionadas 24 horas por dia.',
      item7Title: 'Modo 100% anônimo',
      item7Desc: 'Privacidade absoluta: assista a tudo sem histórico ou rastreamento.',
      item8Title: 'Reprodução direta no navegador',
      item8Desc: 'Acesso instantâneo em qualquer celular sem baixar aplicativos pesados.'
    },
    steps: {
      tag: 'COMO ACESSAR',
      title: 'Comece a assistir em menos de 1 minuto',
      step1Title: 'Toque em «Assistir online»',
      step1Desc: 'Pressione o botão de acesso imediato',
      step2Title: 'Escolha o plano',
      step2Desc: 'Selecione período de 3 ou 6 meses',
      step3Title: 'Escolha a moeda',
      step3Desc: 'Pague com segurança com u ETH',
      step4Title: 'Conecte a carteira',
      step4Desc: 'Confirme a transação com 1 clique',
      step5Title: 'Aproveite o show!',
      step5Desc: 'Milhares de vídeos e streams sem limites'
    },
    banner: {
      tag: 'ACESSO PREMIUM EM 1 CLIQUE',
      title: 'Acesso ilimitado ao <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Acesso imediato e irrestrito a todos os vídeos e transmissões privadas. Pague com u Ethereum.',
      plan3m: '3 meses — $0.99',
      plan6m: '6 meses — $2.99',
      bestValue: 'MELHOR VALOR',
      btn: 'Liberar acesso'
    },
    widget: {
      title: '🔓 ACESSO ILIMITADO',
      subtitle: 'Escolha seu período de acesso',
      plan3m: '3 MESES',
      plan6m: '6 MESES',
      unlimited: 'Acesso Ilimitado',
      bestValue: 'MELHOR VALOR',
      selectPayment: 'SELECIONE A FORMA DE PAGAMENTO',
      usdt: 'USDT',
      tron: 'TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'Rede Ethereum',
      warning: 'Verifique se sua carteira está conectada à rede selecionada.',
      connectBtn: 'CONECTAR CARTEIRA',
      secure: 'Conexão segura via WalletConnect',
      connected: 'Carteira conectada',
      plan: 'Plano',
      network: 'Rede',
      crypto: 'Criptomoeda',
      total: 'Total a pagar',
      payBtn: 'Ir para o pagamento',
      statusConnecting: 'Conectando carteira...',
      statusConnectingDesc: 'Iniciando sessão segura com WalletConnect...',
      statusWaiting: 'Aguardando confirmação',
      statusWaitingDesc: 'Por favor, confirme a transação na sua carteira.',
      statusVerifying: 'Verificando transação...',
      statusVerifyingDesc: 'Aguardando confirmação no blockchain.',
      statusConfirmed: 'Pagamento Confirmado ✓',
      statusActivated: 'Acesso ilimitado ativado',
      continueBtn: 'Continuar',
      errorTitle: 'Falha no pagamento',
      errorDesc: 'Ocorreu um erro ao processar a transação.',
      retryBtn: 'Tentar novamente'
    },
    cta: {
      tag: 'ACESSO DIRETO ONLINE',
      title: 'Pronto para o conteúdo mais <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">quente?</em>',
      desc: 'Entre no TikTok 18+ online e mergulhe no universo de vídeos mais ousado. Centenas de criadores transmitindo ao vivo agora.',
      btn: 'Assistir online',
      caption: 'Transmissão Ao Vivo · Maiores de 18 Anos · 100% Discreto'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Todos os direitos reservados. Apenas adultos.',
      features: 'Recursos',
      privacy: 'Privacidade',
      terms: 'Termos de Uso'
    }
  },

  it: {
    nav: { watchOnline: 'Guarda online', features: 'Funzioni', access: 'Accesso' },
    hero: {
      eyebrow: 'TikTok 18+ · Solo Adulti (+18)',
      title: 'TikTok per <br><em>Adulti</em>',
      desc: 'Video brevi e piccanti senza censure né limiti. Contenuti per adulti, live private e un feed esclusivo — come TikTok, ma rigorosamente 18+.',
      btnWatch: 'Guarda online',
      btnExplore: 'Scopri di più',
      live: 'Live 1080p',
      devices: 'Smartphone e PC',
      anonymous: '100% Anonimo e Sicuro'
    },
    stats: {
      users: 'Utenti attivi',
      videos: 'Video caldi',
      label18: 'Solo 18+',
      satisfaction: 'Soddisfazione'
    },
    features: {
      tag: 'FUNZIONALITÀ ESCLUSIVE',
      title: 'Streaming per adulti di nuova generazione',
      desc: 'Scopri la piattaforma per adulti più audace creata per la massima discrezione e qualità.',
      item1Title: 'Live streaming senza censure',
      item1Desc: 'Dirette in tempo reale con piena interazione, spettacoli caldi e stanze VIP private.',
      item2Title: 'Feed raccomandazioni intelligente',
      item2Desc: 'Algoritmo AI seleziona i video più piccanti in base ai tuoi gusti personali.',
      item3Title: 'Qualità video Full HD',
      item3Desc: 'Streaming nitido a 1080p ottimizzato per qualsiasi smartphone o computer.',
      item4Title: 'Interazione diretta con i creator',
      item4Desc: 'Chatta, invia reazioni e richiedi spettacoli privati direttamente durante le live.',
      item5Title: 'Caricamento ultra rapido',
      item5Desc: 'Riproduzione immediata senza interruzioni con bitrate adattivo.',
      item6Title: 'Nuovi contenuti ogni giorno',
      item6Desc: 'Migliaia di nuovi video e live aggiunti 24 ore su 24.',
      item7Title: 'Modalità 100% anonima',
      item7Desc: 'Privacy totale garantita: guarda tutto senza cronologia o tracce.',
      item8Title: 'Riproduzione diretta nel browser',
      item8Desc: 'Accesso immediato su qualsiasi browser senza installare applicazioni.'
    },
    steps: {
      tag: 'COME ACCEDERE',
      title: 'Inizia a guardare in meno di 1 minuto',
      step1Title: 'Tocca «Guarda online»',
      step1Desc: 'Premi il pulsante di accesso immediato',
      step2Title: 'Scegli il piano',
      step2Desc: 'Seleziona 3 o 6 mesi di accesso',
      step3Title: 'Scegli il pagamento',
      step3Desc: 'Paga in sicurezza con ETH',
      step4Title: 'Collega il wallet',
      step4Desc: 'Conferma la transazione in 1 click',
      step5Title: 'Goditi lo spettacolo!',
      step5Desc: 'Migliaia di video e streaming infiniti'
    },
    banner: {
      tag: 'ACCESSO PREMIUM IN 1 CLIC',
      title: 'Accesso illimitato a <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Accesso immediato e completo a tutti i video e alle dirette private. Paga con Ethereum.',
      plan3m: '3 mesi — $0.99',
      plan6m: '6 mesi — $2.99',
      bestValue: 'MIGLIOR PREZZO',
      btn: 'Attiva accesso'
    },
    widget: {
      title: '🔓 ACCESSO ILLIMITATO',
      subtitle: 'Scegli il periodo di accesso',
      plan3m: '3 MESI',
      plan6m: '6 MESI',
      unlimited: 'Accesso Ilimitato',
      bestValue: 'MIGLIOR PREZZO',
      selectPayment: 'SCEGLI IL METODO DI PAGAMENTO',
      usdt: 'USDT',
      tron: 'TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'Rete Ethereum',
      warning: 'Assicurati che il tuo wallet sia connesso alla rete corretta.',
      connectBtn: 'COLLEGA WALLET',
      secure: 'Connessione sicura tramite WalletConnect',
      connected: 'Wallet collegato',
      plan: 'Piano',
      network: 'Rete',
      crypto: 'Criptovaluta',
      total: 'Totale dovuto',
      payBtn: 'Procedi al pagamento',
      statusConnecting: 'Connessione del wallet in corso...',
      statusConnectingDesc: 'Inizializzazione della sessione sicura WalletConnect...',
      statusWaiting: 'In attesa di conferma',
      statusWaitingDesc: 'Conferma la transazione nel tuo wallet.',
      statusVerifying: 'Verifica della transazione...',
      statusVerifyingDesc: 'In attesa della conferma sulla blockchain.',
      statusConfirmed: 'Pagamento Confermato ✓',
      statusActivated: 'Accesso illimitato attivato',
      continueBtn: 'Continua',
      errorTitle: 'Pagamento fallito',
      errorDesc: 'Si è verificato un errore durante la transazione.',
      retryBtn: 'Riprova'
    },
    cta: {
      tag: 'ACCESSO IMMEDIATO ONLINE',
      title: 'Pronto per lo spettacolo più <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">piccante?</em>',
      desc: 'Entra su TikTok 18+ online e tuffati nell’universo di video più provocante. Centinaia di creator in diretta in questo momento.',
      btn: 'Guarda online',
      caption: 'Live Streaming · Solo Maggiori di 18 Anni · 100% Anonimo'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Tutti i diritti riservati. Solo per adulti.',
      features: 'Funzioni',
      privacy: 'Privacy',
      terms: 'Termini di Servizio'
    }
  },

  zh: {
    nav: { watchOnline: '在线观看', features: '特色功能', access: '会员通道' },
    hero: {
      eyebrow: 'TikTok 18+ · 仅限成年人 (+18)',
      title: '成人专属版 <br><em>TikTok</em>',
      desc: '无审查、无限制的火辣短视频平台。包含成人精选、私密直播与专属个性化推荐 — 极致流畅，专为18岁以上用户打造。',
      btnWatch: '在线观看',
      btnExplore: '了解更多',
      live: '1080P 高清直播',
      devices: '支持手机与电脑',
      anonymous: '100% 匿名与安全'
    },
    stats: {
      users: '活跃用户',
      videos: '精选视频',
      label18: '仅限18+',
      satisfaction: '用户好评率'
    },
    features: {
      tag: '专属特色',
      title: '次世代 18+ 视频直播平台',
      desc: '为您带来私密、高清、无任何删减的全新成人流媒体娱乐体验。',
      item1Title: '无审查真人私密直播',
      item1Desc: '全天候真人在线互动、大尺度才艺表演与VIP私密房。',
      item2Title: 'AI 智能精准推荐算法',
      item2Desc: '先进人工智能深度分析，只为您推送最合心意的精选内容。',
      item3Title: '1080P 极清超清画质',
      item3Desc: '全设备原生硬件加速，流畅播放不卡顿。',
      item4Title: '与主播零距离互动',
      item4Desc: '实时连麦聊天、弹幕互动，随时发起私密定制表演。',
      item5Title: '全球超低延迟秒开',
      item5Desc: '全球CDN加速节点，极速秒播无需漫长等待。',
      item6Title: '每日海量资源上新',
      item6Desc: '每天更新数千部高画质原创新作与精彩录播。',
      item7Title: '100% 纯净无痕匿名模式',
      item7Desc: '不记录观看历史与个人信息，端到端隐私加密保护。',
      item8Title: '浏览器直接点播即看',
      item8Desc: '无需下载繁琐应用，随时随地在手机或电脑浏览器点开即看。'
    },
    steps: {
      tag: '如何开通',
      title: '不到1分钟，立即畅享全部内容',
      step1Title: '点击「在线观看」',
      step1Desc: '轻触快速进入按钮',
      step2Title: '选择会员期限',
      step2Desc: '提供3个月或6个月超值方案',
      step3Title: '选择支付方式',
      step3Desc: '支持 以太坊 (ETH)',
      step4Title: '连接加密钱包',
      step4Desc: '在钱包中一键快速确认交易',
      step5Title: '立即享受盛宴！',
      step5Desc: '解锁海量私密视频与全天候直播'
    },
    banner: {
      tag: '一键极速开通',
      title: '无限畅享 <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: '即刻解锁所有限制级短视频和主播私密房。安全支持 Ethereum 与以太坊付款。',
      plan3m: '3 个月 — $0.99',
      plan6m: '6 个月 — $2.99',
      bestValue: '最划算',
      btn: '立即开通会员'
    },
    widget: {
      title: '🔓 无限畅享会员',
      subtitle: '请选择您的开通周期',
      plan3m: '3 个月',
      plan6m: '6 个月',
      unlimited: '无限制畅看',
      bestValue: '最划算',
      selectPayment: '请选择支付币种',
      usdt: 'USDT',
      tron: 'TRON / TRC20 网络',
      eth: 'Ethereum',
      ethNet: '以太坊主网',
      warning: '请确保您的钱包当前已切换到所选的网络。',
      connectBtn: '连接钱包',
      secure: '基于 WalletConnect 官方安全协议',
      connected: '钱包已成功连接',
      plan: '已选方案',
      network: '区块链网络',
      crypto: '支付币种',
      total: '应付金额',
      payBtn: '确认并支付',
      statusConnecting: '正在连接钱包...',
      statusConnectingDesc: '正在初始化 WalletConnect 安全会话...',
      statusWaiting: '等待钱包确认',
      statusWaitingDesc: '请在您的手机钱包中确认这笔付款。',
      statusVerifying: '正在验证区块链交易...',
      statusVerifyingDesc: '正在等待网络区块确认，请稍候...',
      statusConfirmed: '支付确认成功 ✓',
      statusActivated: '无限访问权限已成功开通',
      continueBtn: '继续观看',
      errorTitle: '支付未能完成',
      errorDesc: '处理这笔交易时遇到了问题，请重试。',
      retryBtn: '重试一次'
    },
    cta: {
      tag: '即刻体验',
      title: '准备好体验最 <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">火辣的内容了吗？</em>',
      desc: '立即进入 TikTok 18+ 在线平台，数百位当红主播此刻正在火热直播。',
      btn: '在线观看',
      caption: '高清直播 · 仅限18岁以上 · 100% 隐私安全'
    },
    footer: {
      copy: '© 2026 TikTok 18+. 版权所有。仅限成人。',
      features: '特色功能',
      privacy: '隐私政策',
      terms: '服务条款'
    }
  },

  vi: {
    nav: { watchOnline: 'Xem trực tuyến', features: 'Tính năng', access: 'Truy cập' },
    hero: {
      eyebrow: 'TikTok 18+ · Chỉ dành cho người lớn (+18)',
      title: 'TikTok cho <br><em>Người lớn</em>',
      desc: 'Video ngắn nóng bỏng không kiểm duyệt và không giới hạn. Nội dung quyến rũ, livestream riêng tư và bảng tin độc quyền — hệt như TikTok nhưng hoàn toàn 18+.',
      btnWatch: 'Xem trực tuyến',
      btnExplore: 'Khám phá thêm',
      live: 'Trực tiếp 1080p',
      devices: 'Điện thoại & PC',
      anonymous: '100% Ẩn danh & Bảo mật'
    },
    stats: {
      users: 'Người dùng tích cực',
      videos: 'Video nóng bỏng',
      label18: 'Chỉ 18+',
      satisfaction: 'Độ hài lòng'
    },
    features: {
      tag: 'TÍNH NĂNG ĐỘC QUYỀN',
      title: 'Nền tảng phát trực tuyến 18+ thế hệ mới',
      desc: 'Trải nghiệm nội dung người lớn chân thực nhất được thiết kế để bảo mật tuyệt đối và chất lượng đỉnh cao.',
      item1Title: 'Phát trực tiếp không kiểm duyệt',
      item1Desc: 'Livestream tương tác theo thời gian thực, các buổi biểu diễn táo bạo và phòng VIP riêng tư.',
      item2Title: 'Bảng tin gợi ý thông minh',
      item2Desc: 'Thuật toán AI tự động chọn lọc các clip nóng nhất phù hợp hoàn hảo với sở thích của bạn.',
      item3Title: 'Chất lượng video HD siêu nét',
      item3Desc: 'Phát video 1080p mượt mà tối ưu trên mọi thiết bị di động hay máy tính.',
      item4Title: 'Tương tác trực tiếp với idol',
      item4Desc: 'Trò chuyện, gửi biểu cảm và yêu cầu show riêng ngay trong lúc livestream.',
      item5Title: 'Tốc độ tải cực nhanh',
      item5Desc: 'Xem ngay tức thì không giật lag với công nghệ truyền tải thích ứng.',
      item6Title: 'Cập nhật liên tục mỗi ngày',
      item6Desc: 'Hàng ngàn video và phiên trực tiếp mới được thêm vào 24/7.',
      item7Title: 'Chế độ ẩn danh 100%',
      item7Desc: 'Bảo mật quyền riêng tư tuyệt đối: xem thả ga không lưu lịch sử.',
      item8Title: 'Xem trực tiếp trên trình duyệt',
      item8Desc: 'Truy cập ngay trên điện thoại hoặc máy tính mà không cần cài đặt ứng dụng.'
    },
    steps: {
      tag: 'CÁCH TRUY CẬP',
      title: 'Bắt đầu xem trong chưa đầy 1 phút',
      step1Title: 'Nhấn «Xem trực tuyến»',
      step1Desc: 'Nhấn nút truy cập nhanh',
      step2Title: 'Chọn gói truy cập',
      step2Desc: 'Gói 3 tháng hoặc 6 tháng',
      step3Title: 'Chọn thanh toán',
      step3Desc: 'Thanh toán an toàn với ETH',
      step4Title: 'Kết nối ví',
      step4Desc: 'Xác nhận giao dịch chỉ với 1 chạm',
      step5Title: 'Thưởng thức ngay!',
      step5Desc: 'Xem vô tận các video và livestream'
    },
    banner: {
      tag: 'TRUY CẬP CAO CẤP 1 CHẠM',
      title: 'Truy cập không giới hạn <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Xem ngay tất cả video không che và livestream riêng tư. Thanh toán an toàn bằng Ethereum.',
      plan3m: '3 tháng — $0.99',
      plan6m: '6 tháng — $2.99',
      bestValue: 'TIẾT KIỆM NHẤT',
      btn: 'Mở khóa ngay'
    },
    widget: {
      title: '🔓 TRUY CẬP KHÔNG GIỚI HẠN',
      subtitle: 'Chọn thời hạn truy cập của bạn',
      plan3m: '3 THÁNG',
      plan6m: '6 THÁNG',
      unlimited: 'Truy Cập Không Giới Hạn',
      bestValue: 'TIẾT KIỆM NHẤT',
      selectPayment: 'CHỌN PHƯƠNG THỨC THANH TOÁN',
      usdt: 'USDT',
      tron: 'Mạng TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'Mạng ETH Network',
      warning: 'Hãy đảm bảo ví của bạn đã được kết nối đúng mạng đã chọn.',
      connectBtn: 'KẾT NỐI VÍ',
      secure: 'Kết nối bảo mật qua WalletConnect',
      connected: 'Ví đã kết nối',
      plan: 'Gói',
      network: 'Mạng lưới',
      crypto: 'Tiền mã hóa',
      total: 'Tổng thanh toán',
      payBtn: 'Tiến hành thanh toán',
      statusConnecting: 'Đang kết nối ví...',
      statusConnectingDesc: 'Đang khởi tạo phiên bảo mật WalletConnect...',
      statusWaiting: 'Đang chờ xác nhận',
      statusWaitingDesc: 'Vui lòng xác nhận giao dịch trong ví của bạn.',
      statusVerifying: 'Đang kiểm tra giao dịch...',
      statusVerifyingDesc: 'Đang chờ xác nhận trên blockchain.',
      statusConfirmed: 'Thanh toán thành công ✓',
      statusActivated: 'Đã kích hoạt quyền truy cập không giới hạn',
      continueBtn: 'Tiếp tục',
      errorTitle: 'Thanh toán thất bại',
      errorDesc: 'Đã xảy ra lỗi khi xử lý giao dịch. Vui lòng thử lại.',
      retryBtn: 'Thử lại'
    },
    cta: {
      tag: 'TRUY CẬP TRỰC TIẾP',
      title: 'Sẵn sàng cho những màn trình diễn <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">bỏng mắt nhất?</em>',
      desc: 'Khám phá TikTok 18+ trực tuyến ngay bây giờ. Hàng trăm idol đang livestream ngay lúc này.',
      btn: 'Xem trực tuyến',
      caption: 'Livestream Trực Tiếp · Chỉ Từ 18 Tuổi · 100% Kín Đáo'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Mọi quyền được bảo lưu. Chỉ dành cho người lớn.',
      features: 'Tính năng',
      privacy: 'Quyền riêng tư',
      terms: 'Điều khoản sử dụng'
    }
  },

  th: {
    nav: { watchOnline: 'ดูออนไลน์', features: 'ฟีเจอร์', access: 'เข้าใช้งาน' },
    hero: {
      eyebrow: 'TikTok 18+ · สำหรับผู้ใหญ่เท่านั้น (+18)',
      title: 'TikTok สำหรับ <br><em>ผู้ใหญ่</em>',
      desc: 'คลิปสั้นสุดเร่าร้อนไร้การเซ็นเซอร์และไร้ข้อจำกัด การแสดงสดส่วนตัว และฟีดพิเศษเฉพาะคุณ — เหมือน TikTok แต่เป็น 18+ อย่างแท้จริง',
      btnWatch: 'ดูออนไลน์',
      btnExplore: 'ดูฟีเจอร์เพิ่มเติม',
      live: 'ไลฟ์สด 1080p',
      devices: 'มือถือและคอมพิวเตอร์',
      anonymous: 'ไม่ระบุตัวตนและปลอดภัย 100%'
    },
    stats: {
      users: 'ผู้ใช้งานจริง',
      videos: 'วิดีโอสุดฮอต',
      label18: 'เฉพาะ 18+',
      satisfaction: 'ความพึงพอใจ'
    },
    features: {
      tag: 'ฟีเจอร์พิเศษ',
      title: 'สตรีมมิ่ง 18+ ยุคใหม่',
      desc: 'สัมผัสแพลตฟอร์มผู้ใหญ่ที่ร้อนแรงที่สุด ออกแบบมาเพื่อความเป็นส่วนตัวและคุณภาพสูงสุด',
      item1Title: 'ไลฟ์สดไร้การเซ็นเซอร์',
      item1Desc: 'ถ่ายทอดสดแบบเรียลไทม์ พร้อมห้อง VIP ส่วนตัวและการโต้ตอบแบบเต็มรูปแบบ',
      item2Title: 'ฟีดแนะนำอัจฉริยะ',
      item2Desc: 'ระบบ AI คัดสรรคลิปที่ฮอตที่สุดตามความชอบส่วนตัวของคุณ',
      item3Title: 'ความคมชัดระดับ HD',
      item3Desc: 'สตรีมมิ่งความละเอียด 1080p คมชัด ลื่นไหลบนทุกหน้าจอมือถือ',
      item4Title: 'โต้ตอบกับครีเอเตอร์โดยตรง',
      item4Desc: 'แชท ส่งรีแอคชั่น และขอการแสดงสดส่วนตัวได้ทันที',
      item5Title: 'โหลดเร็วทันใจ',
      item5Desc: 'เล่นวิดีโอได้ทันทีไม่มีสะดุด ด้วยเทคโนโลยีปรับบิตเรตอัตโนมัติ',
      item6Title: 'อัปเดตใหม่ทุกวัน',
      item6Desc: 'เพิ่มคลิปใหม่และไลฟ์สดใหม่หลายพันรายการตลอด 24 ชั่วโมง',
      item7Title: 'โหมดไม่ระบุตัวตน 100%',
      item7Desc: 'รับประกันความเป็นส่วนตัวสูงสุด: ดูได้โดยไม่ต้องมีประวัติหรือการติดตาม',
      item8Title: 'เล่นผ่านเบราว์เซอร์ได้ทันที',
      item8Desc: 'เข้าชมได้ทันทีผ่านเบราว์เซอร์ในมือถือโดยไม่ต้องติดตั้งแอปพลิเคชัน'
    },
    steps: {
      tag: 'วิธีเข้าใช้งาน',
      title: 'เริ่มต้นรับชมได้ในเวลาไม่ถึง 1 นาที',
      step1Title: 'แตะ «ดูออนไลน์»',
      step1Desc: 'กดปุ่มเข้าชมได้ทันที',
      step2Title: 'เลือกแพ็กเกจ',
      step2Desc: 'เลือกระยะเวลา 3 หรือ 6 เดือน',
      step3Title: 'เลือกการชำระเงิน',
      step3Desc: 'ชำระเงินอย่างปลอดภัยด้วย ETH',
      step4Title: 'เชื่อมต่อกระเป๋าเงิน',
      step4Desc: 'ยืนยันธุรกรรมในคลิกเดียว',
      step5Title: 'เพลิดเพลินกับโชว์!',
      step5Desc: 'วิดีโอและสตรีมสดไร้ขีดจำกัด'
    },
    banner: {
      tag: 'เข้าใช้งานพรีเมียมใน 1 คลิก',
      title: 'เข้าถึงแบบไม่จำกัดกับ <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'เข้าถึงวิดีโอแบบไม่เซ็นเซอร์และไลฟ์สดส่วนตัวได้ทันที ชำระเงินง่ายๆ ด้วย Ethereum',
      plan3m: '3 เดือน — $0.99',
      plan6m: '6 เดือน — $2.99',
      bestValue: 'คุ้มค่าที่สุด',
      btn: 'สมัครสมาชิกทันที'
    },
    widget: {
      title: '🔓 เข้าถึงแบบไม่จำกัด',
      subtitle: 'เลือกระยะเวลาการเข้าถึงของคุณ',
      plan3m: '3 เดือน',
      plan6m: '6 เดือน',
      unlimited: 'เข้าถึงได้ไม่จำกัด',
      bestValue: 'คุ้มค่าที่สุด',
      selectPayment: 'เลือกวิธีการชำระเงิน',
      usdt: 'USDT',
      tron: 'เครือข่าย TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'เครือข่าย ETH Network',
      warning: 'โปรดตรวจสอบให้แน่ใจว่ากระเป๋าเงินของคุณเชื่อมต่อกับเครือข่ายที่เลือก',
      connectBtn: 'เชื่อมต่อกระเป๋าเงิน',
      secure: 'การเชื่อมต่อปลอดภัยผ่าน WalletConnect',
      connected: 'เชื่อมต่อกระเป๋าเงินแล้ว',
      plan: 'แพ็กเกจ',
      network: 'เครือข่าย',
      crypto: 'สกุลเงินคริปโต',
      total: 'ยอดชำระทั้งหมด',
      payBtn: 'ดำเนินการชำระเงิน',
      statusConnecting: 'กำลังเชื่อมต่อกระเป๋าเงิน...',
      statusConnectingDesc: 'กำลังเริ่มเซสชันปลอดภัยผ่าน WalletConnect...',
      statusWaiting: 'กำลังรอการยืนยัน',
      statusWaitingDesc: 'โปรดยืนยันการทำธุรกรรมในกระเป๋าเงินของคุณ',
      statusVerifying: 'กำลังตรวจสอบธุรกรรม...',
      statusVerifyingDesc: 'กำลังรอการยืนยันบนบล็อกเชน...',
      statusConfirmed: 'ชำระเงินสำเร็จ ✓',
      statusActivated: 'เปิดใช้งานการเข้าถึงแบบไม่จำกัดแล้ว',
      continueBtn: 'ดำเนินการต่อ',
      errorTitle: 'การชำระเงินล้มเหลว',
      errorDesc: 'เกิดข้อผิดพลาดในการประมวลผลธุรกรรม โปรดลองอีกครั้ง',
      retryBtn: 'ลองใหม่อีกครั้ง'
    },
    cta: {
      tag: 'เข้าชมออนไลน์ได้ทันที',
      title: 'พร้อมสำหรับโชว์ที่ <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">ร้อนแรงที่สุดหรือยัง?</em>',
      desc: 'เข้าสู่ TikTok 18+ ออนไลน์ตอนนี้ ครีเอเตอร์หลายร้อยคนกำลังไลฟ์สดอยู่ในขณะนี้',
      btn: 'ดูออนไลน์',
      caption: 'ไลฟ์สตรีมสด · สำหรับผู้มีอายุ 18 ปีขึ้นไปเท่านั้น · เป็นส่วนตัว 100%'
    },
    footer: {
      copy: '© 2026 TikTok 18+. สงวนลิขสิทธิ์ทั้งหมด สำหรับผู้ใหญ่เท่านั้น',
      features: 'ฟีเจอร์',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'ข้อกำหนดการใช้งาน'
    }
  },

  fr: {
    nav: { watchOnline: 'Regarder en ligne', features: 'Fonctionnalités', access: 'Accès' },
    hero: {
      eyebrow: 'TikTok 18+ · Réservé aux adultes (+18)',
      title: 'TikTok pour <br><em>Adultes</em>',
      desc: 'Courtes vidéos torrides, sans censure ni restrictions. Contenu érotique, streams privés en direct et fil d’actualité exclusif — tout comme TikTok, mais strictement 18+.',
      btnWatch: 'Regarder en ligne',
      btnExplore: 'Découvrir',
      live: 'En direct 1080p',
      devices: 'Mobile & PC',
      anonymous: '100% Anonyme & Sécurisé'
    },
    stats: {
      users: 'Utilisateurs actifs',
      videos: 'Vidéos chaudes',
      label18: 'Uniquement 18+',
      satisfaction: 'Satisfaction'
    },
    features: {
      tag: 'FONCTIONNALITÉS EXCLUSIVES',
      title: 'Le streaming adulte nouvelle génération',
      desc: 'Découvrez la plateforme pour adultes la plus audacieuse, conçue pour une discrétion totale et une qualité haut de gamme.',
      item1Title: 'Diffusions en direct non censurées',
      item1Desc: 'Streams interactifs en temps réel avec salons VIP privés et shows exclusifs.',
      item2Title: 'Fil de recommandations intelligent',
      item2Desc: 'L’algorithme IA sélectionne les vidéos les plus chaudes adaptées à vos envies.',
      item3Title: 'Qualité vidéo Full HD',
      item3Desc: 'Streaming 1080p fluide optimisé pour smartphones, tablettes et ordinateurs.',
      item4Title: 'Interaction directe avec les créateurs',
      item4Desc: 'Discutez en direct, envoyez des réactions et demandez des shows privés.',
      item5Title: 'Chargement ultra-rapide',
      item5Desc: 'Lecture instantanée sans aucun temps de chargement grâce au débit adaptatif.',
      item6Title: 'Nouveautés quotidiennes',
      item6Desc: 'Des milliers de vidéos inédites et de lives ajoutés 24h/24 et 7j/7.',
      item7Title: 'Mode 100% anonyme',
      item7Desc: 'Confidentialité absolue : regardez tout sans historique ni traçage.',
      item8Title: 'Lecture directe sur navigateur',
      item8Desc: 'Accès direct depuis n’importe quel navigateur sans installer d’application.'
    },
    steps: {
      tag: 'COMMENT ACCÉDER',
      title: 'Commencez à regarder en moins d’une minute',
      step1Title: 'Cliquez sur «Regarder en ligne»',
      step1Desc: 'Appuyez sur le bouton d’accès rapide',
      step2Title: 'Choisissez votre formule',
      step2Desc: 'Formule 3 mois ou 6 mois',
      step3Title: 'Choisissez le paiement',
      step3Desc: 'Payez en toute sécurité par u ETH',
      step4Title: 'Connectez votre portefeuille',
      step4Desc: 'Confirmez la transaction en 1 clic',
      step5Title: 'Profitez du spectacle !',
      step5Desc: 'Des milliers de vidéos et lives sans limite'
    },
    banner: {
      tag: 'ACCÈS PREMIUM EN 1 CLIC',
      title: 'Accès illimité à <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Accès immédiat et illimité à toutes les vidéos non censurées et aux streams privés. Paiement en u Ethereum.',
      plan3m: '3 mois — $0.99',
      plan6m: '6 mois — $2.99',
      bestValue: 'MEILLEURE OFFRE',
      btn: 'Obtenir mon accès'
    },
    widget: {
      title: '🔓 ACCÈS ILLIMITÉ',
      subtitle: 'Choisissez votre durée d’accès',
      plan3m: '3 MOIS',
      plan6m: '6 MOIS',
      unlimited: 'Accès Illimité',
      bestValue: 'MEILLEURE OFFRE',
      selectPayment: 'CHOISISSEZ LE MODE DE PAIEMENT',
      usdt: 'USDT',
      tron: 'Réseau TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'Réseau Ethereum',
      warning: 'Vérifiez que votre portefeuille est bien connecté au réseau sélectionné.',
      connectBtn: 'CONNECTER LE PORTEFEUILLE',
      secure: 'Connexion sécurisée via WalletConnect',
      connected: 'Portefeuille connecté',
      plan: 'Formule',
      network: 'Réseau',
      crypto: 'Cryptomonnaie',
      total: 'Total à régler',
      payBtn: 'Procéder au paiement',
      statusConnecting: 'Connexion au portefeuille...',
      statusConnectingDesc: 'Initialisation de la session sécurisée WalletConnect...',
      statusWaiting: 'En attente de confirmation',
      statusWaitingDesc: 'Veuillez confirmer la transaction dans votre portefeuille.',
      statusVerifying: 'Vérification de la transaction...',
      statusVerifyingDesc: 'En attente de confirmation sur la blockchain...',
      statusConfirmed: 'Paiement confirmé ✓',
      statusActivated: 'Accès illimité activé avec succès',
      continueBtn: 'Continuer',
      errorTitle: 'Paiement échoué',
      errorDesc: 'Une erreur est survenue lors du traitement de la transaction.',
      retryBtn: 'Réessayer'
    },
    cta: {
      tag: 'ACCÈS DIRECT EN LIGNE',
      title: 'Prêt pour le show le plus <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">torride ?</em>',
      desc: 'Rejoignez TikTok 18+ en ligne dès maintenant et découvrez l’univers le plus audacieux. Des centaines de créateurs sont en direct en ce moment même.',
      btn: 'Regarder en ligne',
      caption: 'Diffusion en Direct · Réservé aux plus de 18 ans · 100% Discret'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Tous droits réservés. Réservé aux adultes.',
      features: 'Fonctionnalités',
      privacy: 'Confidentialité',
      terms: 'Conditions d’utilisation'
    }
  },

  ro: {
    nav: { watchOnline: 'Vizionează online', features: 'Funcții', access: 'Acces' },
    hero: {
      eyebrow: 'TikTok 18+ · Numai pentru adulți (+18)',
      title: 'TikTok pentru <br><em>Adulți</em>',
      desc: 'Videoclipuri scurte și fierbinți, fără cenzură și fără restricții. Conținut erotic, transmisiuni live private și un feed exclusiv — la fel ca TikTok, dar strict 18+.',
      btnWatch: 'Vizionează online',
      btnExplore: 'Află mai multe',
      live: 'Live 1080p',
      devices: 'Mobil & PC',
      anonymous: '100% Anonim & Sigur'
    },
    stats: {
      users: 'Utilizatori activi',
      videos: 'Videoclipuri fierbinți',
      label18: 'Strict 18+',
      satisfaction: 'Satisfacție'
    },
    features: {
      tag: 'CARACTERISTICI EXCLUSIVE',
      title: 'Streaming pentru adulți de nouă generație',
      desc: 'Experimentează cea mai îndrăzneață platformă creată pentru discreție totală și calitate premium.',
      item1Title: 'Live streaming necenzurat',
      item1Desc: 'Transmisiuni în direct cu interacțiune completă și camere VIP private.',
      item2Title: 'Feed inteligent de recomandări',
      item2Desc: 'Algoritmul AI selectează cele mai bune clipuri special pentru gusturile tale.',
      item3Title: 'Calitate video HD',
      item3Desc: 'Streaming clar la 1080p optimizat pentru orice telefon sau computer.',
      item4Title: 'Interacțiune directă cu creatorii',
      item4Desc: 'Scrie în chat, trimite reacții și cere spectacole private în direct.',
      item5Title: 'Încărcare ultra-rapidă',
      item5Desc: 'Redare instantanee fără întreruperi cu rată de biți adaptivă.',
      item6Title: 'Conținut nou în fiecare zi',
      item6Desc: 'Mii de videoclipuri și streamuri noi adăugate 24 de ore din 24.',
      item7Title: 'Mod 100% anonim',
      item7Desc: 'Confidențialitate absolută garantată: vizionează fără istoric sau urmărire.',
      item8Title: 'Redare directă în browser',
      item8Desc: 'Acces imediat pe telefon fără a descărca aplicații suplimentare.'
    },
    steps: {
      tag: 'CUM SĂ ACCEZI',
      title: 'Începe să vizionezi în mai puțin de 1 minut',
      step1Title: 'Apasă «Vizionează online»',
      step1Desc: 'Apasă butonul de acces rapid',
      step2Title: 'Alege planul',
      step2Desc: 'Perioadă de 3 sau 6 luni',
      step3Title: 'Alege plata',
      step3Desc: 'Plată sigură cu ETH',
      step4Title: 'Conectează portofelul',
      step4Desc: 'Confirmă tranzacția cu un singur clic',
      step5Title: 'Bucură-te de show!',
      step5Desc: 'Mii de clipuri și transmisiuni fără limite'
    },
    banner: {
      tag: 'ACCES PREMIUM ÎNTR-UN CLIC',
      title: 'Acces nelimitat la <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Acces imediat și fără restricții la toate videoclipurile necenzurate și live-urile private. Plătește cu Ethereum.',
      plan3m: '3 luni — $0.99',
      plan6m: '6 luni — $2.99',
      bestValue: 'CEL MAI BUN PREȚ',
      btn: 'Activează accesul'
    },
    widget: {
      title: '🔓 ACCES NELIMITAT',
      subtitle: 'Alege perioada de acces',
      plan3m: '3 LUNI',
      plan6m: '6 LUNI',
      unlimited: 'Acces Nelimitat',
      bestValue: 'CEL MAI BUN PREȚ',
      selectPayment: 'SELECTEAZĂ METODA DE PLATĂ',
      usdt: 'USDT',
      tron: 'Rețeaua TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'Rețeaua ETH Network',
      warning: 'Asigură-te că portofelul tău este conectat la rețeaua selectată.',
      connectBtn: 'CONECTEAZĂ PORTOFELUL',
      secure: 'Conexiune securizată prin WalletConnect',
      connected: 'Portofel conectat',
      plan: 'Plan',
      network: 'Rețea',
      crypto: 'Criptomonedă',
      total: 'Total de plată',
      payBtn: 'Continuă spre plată',
      statusConnecting: 'Se conectează portofelul...',
      statusConnectingDesc: 'Se inițializează sesiunea sigură WalletConnect...',
      statusWaiting: 'Se așteaptă confirmarea',
      statusWaitingDesc: 'Te rugăm să confirmi tranzacția în portofelul tău.',
      statusVerifying: 'Se verifică tranzacția...',
      statusVerifyingDesc: 'Se așteaptă confirmarea în blockchain.',
      statusConfirmed: 'Plată confirmată ✓',
      statusActivated: 'Accesul nelimitat a fost activat',
      continueBtn: 'Continuă',
      errorTitle: 'Plată eșuată',
      errorDesc: 'A apărut o eroare la procesarea tranzacției.',
      retryBtn: 'Încearcă din nou'
    },
    cta: {
      tag: 'ACCES DIRECT ONLINE',
      title: 'Ești pregătit pentru cel mai <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">fierbinte show?</em>',
      desc: 'Intră pe TikTok 18+ online acum. Sute de creatori transmit în direct în acest moment.',
      btn: 'Vizionează online',
      caption: 'Streaming Live · Exclusiv peste 18 ani · 100% Discret'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Toate drepturile rezervate. Doar pentru adulți.',
      features: 'Funcții',
      privacy: 'Confidențialitate',
      terms: 'Termeni de utilizare'
    }
  },

  hu: {
    nav: { watchOnline: 'Nézés online', features: 'Funkciók', access: 'Hozzáférés' },
    hero: {
      eyebrow: 'TikTok 18+ · Csak felnőtteknek (+18)',
      title: 'TikTok <br><em>Felnőtteknek</em>',
      desc: 'Forró, cenzúrázatlan rövid videók korlátozások nélkül. Erotikus tartalom, privát élő közvetítések és exkluzív feed — pontosan úgy, mint a TikTokon, de szigorúan 18+.',
      btnWatch: 'Nézés online',
      btnExplore: 'További információ',
      live: 'Élő 1080p',
      devices: 'Mobil és számítógép',
      anonymous: '100% Névtelen és biztonságos'
    },
    stats: {
      users: 'Aktív felhasználó',
      videos: 'Forró videó',
      label18: 'Csak 18+',
      satisfaction: 'Elégedettség'
    },
    features: {
      tag: 'EXKLUZÍV FUNKCIÓK',
      title: 'Új generációs 18+ streaming',
      desc: 'Tapasztald meg a legmerészebb felnőtt platformot, amelyet a teljes diszkrécióra és a prémium minőségre terveztek.',
      item1Title: 'Cenzúrázatlan élő közvetítés',
      item1Desc: 'Valós idejű adások interakcióval, forró műsorokkal és privát VIP szobákkal.',
      item2Title: 'Intelligens ajánlási feed',
      item2Desc: 'A mesterséges intelligencia kiválogatja az ízlésednek megfelelő legjobb videókat.',
      item3Title: 'HD videóminőség',
      item3Desc: 'Kristálytiszta 1080p felbontás bármely telefonon vagy gépen.',
      item4Title: 'Közvetlen kapcsolat az alkotókkal',
      item4Desc: 'Csevegj, küldj reakciókat és kérj privát show-t közvetlenül adás közben.',
      item5Title: 'Rendkívül gyors betöltés',
      item5Desc: 'Azonnali lejátszás akadozás és várakozás nélkül.',
      item6Title: 'Naponta új tartalmak',
      item6Desc: 'Több ezer új videó és közvetítés éjjel-nappal frissülve.',
      item7Title: '100% Névtelen mód',
      item7Desc: 'Teljes adatvédelem: nézz bármit előzmények és nyomkövetés nélkül.',
      item8Title: 'Közvetlen böngészős lejátszás',
      item8Desc: 'Azonnali elérés a mobil böngészőből alkalmazás letöltése nélkül.'
    },
    steps: {
      tag: 'HOGYAN ÉRHETŐ EL',
      title: 'Kezdd el nézni kevesebb mint 1 perc alatt',
      step1Title: 'Kattints az «Online nézés» gombra',
      step1Desc: 'Nyomd meg az azonnali hozzáférés gombot',
      step2Title: 'Válassz csomagot',
      step2Desc: '3 vagy 6 hónapos időszak',
      step3Title: 'Válassz fizetést',
      step3Desc: 'Fizess biztonságosan ETH-val',
      step4Title: 'Csatlakoztasd a tárcád',
      step4Desc: 'Hagyd jóvá a tranzakciót 1 kattintással',
      step5Title: 'Élvezd a műsort!',
      step5Desc: 'Végtelen videók és közvetítések'
    },
    banner: {
      tag: 'PRÉMIUM HOZZÁFÉRÉS 1 KATTINTÁSSAL',
      title: 'Korlátlan hozzáférés a <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>-hoz',
      desc: 'Azonnali és korlátlan hozzáférés az összes cenzúrázatlan videóhoz és privát streamhez. Fizess Ethereum segítségével.',
      plan3m: '3 hónap — $0.99',
      plan6m: '6 hónap — $2.99',
      bestValue: 'LEGJOBB AJÁNLAT',
      btn: 'Hozzáférés igénylése'
    },
    widget: {
      title: '🔓 KORLÁTLAN HOZZÁFÉRÉS',
      subtitle: 'Válassza ki a hozzáférési időszakot',
      plan3m: '3 HÓNAP',
      plan6m: '6 HÓNAP',
      unlimited: 'Korlátlan hozzáférés',
      bestValue: 'LEGJOBB AJÁNLAT',
      selectPayment: 'VÁLASSZON FIZETÉSI MÓDOT',
      usdt: 'USDT',
      tron: 'TRON / TRC20 hálózat',
      eth: 'Ethereum',
      ethNet: 'ETH hálózat',
      warning: 'Kérjük, ellenőrizze, hogy tárcája a kiválasztott hálózathoz van-e csatlakoztatva.',
      connectBtn: 'TÁRCA CSATLAKOZTATÁSA',
      secure: 'Biztonságos kapcsolat a WalletConnect révén',
      connected: 'Tárca csatlakoztatva',
      plan: 'Csomag',
      network: 'Hálózat',
      crypto: 'Kriptovaluta',
      total: 'Fizetendő összeg',
      payBtn: 'Tovább a fizetéshez',
      statusConnecting: 'Tárca csatlakoztatása folyamatban...',
      statusConnectingDesc: 'Biztonságos WalletConnect kapcsolat indítása...',
      statusWaiting: 'Megerősítésre vár',
      statusWaitingDesc: 'Kérjük, hagyja jóvá a tranzakciót a tárcájában.',
      statusVerifying: 'Tranzakció ellenőrzése...',
      statusVerifyingDesc: 'Várakozás a blokklánc megerősítésére.',
      statusConfirmed: 'Fizetés megerősítve ✓',
      statusActivated: 'A korlátlan hozzáférés sikeresen aktiválva',
      continueBtn: 'Folytatás',
      errorTitle: 'A fizetés sikertelen',
      errorDesc: 'Hiba történt a tranzakció feldolgozása során.',
      retryBtn: 'Újrapróbálkozás'
    },
    cta: {
      tag: 'KÖZVETLEN ONLINE HOZZÁFÉRÉS',
      title: 'Készen állsz a legforróbb <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">műsorokra?</em>',
      desc: 'Lépj be a TikTok 18+ oldalára most. Alkotók százai streamelnek élőben ebben a pillanatban.',
      btn: 'Nézés online',
      caption: 'Élő streaming · Csak 18 éven felülieknek · 100% Diszkrét'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Minden jog fenntartva. Csak felnőtteknek.',
      features: 'Funkciók',
      privacy: 'Adatvédelem',
      terms: 'Felhasználási feltételek'
    }
  },

  sr: {
    nav: { watchOnline: 'Gledaj online', features: 'Funkcije', access: 'Pristup' },
    hero: {
      eyebrow: 'TikTok 18+ · Samo za odrasle (+18)',
      title: 'TikTok za <br><em>Odrasle</em>',
      desc: 'Vreli kratki video snimci bez cenzure i ograničenja. Erotski sadržaj, privatni prenosi uživo i ekskluzivni feed — baš kao TikTok, ali strogo 18+.',
      btnWatch: 'Gledaj online',
      btnExplore: 'Saznaj više',
      live: 'Uživo 1080p',
      devices: 'Mobilni i računar',
      anonymous: '100% Anonimno i bezbedno'
    },
    stats: {
      users: 'Aktivnih korisnika',
      videos: 'Vrelih video snimaka',
      label18: 'Samo 18+',
      satisfaction: 'Zadovoljstvo'
    },
    features: {
      tag: 'EKSKLUZIVNE FUNKCIJE',
      title: 'Nova generacija 18+ striminga',
      desc: 'Doživite najsmeliju platformu za odrasle stvorenu za potpunu diskreciju i vrhunski kvalitet.',
      item1Title: 'Prenosi uživo bez cenzure',
      item1Desc: 'Emitovanje u realnom vremenu uz punu interakciju i privatne VIP sobe.',
      item2Title: 'Pametan algoritam preporuka',
      item2Desc: 'Veštačka inteligencija bira najatraktivnije video snimke skrojene prema vašem ukusu.',
      item3Title: 'HD video kvalitet',
      item3Desc: 'Kristalno jasan 1080p striming optimizovan za svaki mobilni telefon ili PC.',
      item4Title: 'Direktna komunikacija sa kreatorima',
      item4Desc: 'Ćaskajte, šaljite reakcije i zatražite privatne nastupe uživo.',
      item5Title: 'Izuzetno brzo učitavanje',
      item5Desc: 'Trenutno puštanje video snimaka bez zastoja i baferovanja.',
      item6Title: 'Novi sadržaj svakog dana',
      item6Desc: 'Hiljade novih video zapisa i prenosa dodatih tokom celog dana.',
      item7Title: '100% Anoniman režim',
      item7Desc: 'Potpuna privatnost zagarantovana: gledajte bez istorije ili praćenja.',
      item8Title: 'Gledanje direktno u pregledaču',
      item8Desc: 'Trenutni pristup na telefonu bez potrebe za instaliranjem aplikacija.'
    },
    steps: {
      tag: 'KAKO PRISTUPITI',
      title: 'Počnite sa gledanjem za manje od 1 minuta',
      step1Title: 'Dodirnite «Gledaj online»',
      step1Desc: 'Pritisnite dugme za brzi pristup',
      step2Title: 'Izaberite period',
      step2Desc: 'Plan na 3 ili 6 meseci',
      step3Title: 'Izaberite plaćanje',
      step3Desc: 'Sigurno plaćanje putem ETH',
      step4Title: 'Povežite novčanik',
      step4Desc: 'Potvrdite transakciju jednim klikom',
      step5Title: 'Uživajte u šou!',
      step5Desc: 'Beskrajan izbor video zapisa i prenosa'
    },
    banner: {
      tag: 'PREMIJUM PRISTUP U 1 KLIKU',
      title: 'Neograničen pristup za <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Trenutni neograničeni pristup svim video zapisima i privatnim strimovima. Plaćanje u Ethereum kriptovaluti.',
      plan3m: '3 meseca — $0.99',
      plan6m: '6 meseci — $2.99',
      bestValue: 'NAJPOVOLJNIJE',
      btn: 'Aktiviraj pristup'
    },
    widget: {
      title: '🔓 NEOGRANIČEN PRISTUP',
      subtitle: 'Izaberite period pristupa',
      plan3m: '3 MESECA',
      plan6m: '6 MESECI',
      unlimited: 'Neograničen pristup',
      bestValue: 'NAJPOVOLJNIJE',
      selectPayment: 'IZABERITE NAČIN PLAĆANJA',
      usdt: 'USDT',
      tron: 'TRON / TRC20 mreža',
      eth: 'Ethereum',
      ethNet: 'ETH mreža',
      warning: 'Proverite da li je vaš novčanik povezan na izabranu mrežu.',
      connectBtn: 'POVEŽI NOVČANIK',
      secure: 'Bezbedna veza putem WalletConnect',
      connected: 'Novčanik je povezan',
      plan: 'Plan',
      network: 'Mreža',
      crypto: 'Kriptovaluta',
      total: 'Ukupno za plaćanje',
      payBtn: 'Nastavi na plaćanje',
      statusConnecting: 'Povezivanje novčanika...',
      statusConnectingDesc: 'Pokretanje bezbedne WalletConnect sesije...',
      statusWaiting: 'Čeka se potvrda',
      statusWaitingDesc: 'Potvrdite transakciju u vašem kripto novčaniku.',
      statusVerifying: 'Provera transakcije...',
      statusVerifyingDesc: 'Čeka se potvrda na blokčejnu.',
      statusConfirmed: 'Plaćanje uspešno potvrđeno ✓',
      statusActivated: 'Neograničen pristup je aktiviran',
      continueBtn: 'Nastavi',
      errorTitle: 'Plaćanje nije uspelo',
      errorDesc: 'Došlo je do greške prilikom obrade transakcije.',
      retryBtn: 'Pokušaj ponovo'
    },
    cta: {
      tag: 'DIREKTAN PRISTUP ONLINE',
      title: 'Spremni za najvrelije <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">nastupe?</em>',
      desc: 'Uđite na TikTok 18+ online odmah. Stotine autora strimuje uživo u ovom trenutku.',
      btn: 'Gledaj online',
      caption: 'Prenos Uživo · Isključivo za starije od 18 godina · 100% Diskretno'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Sva prava zadržana. Samo za odrasle.',
      features: 'Funkcije',
      privacy: 'Privatnost',
      terms: 'Uslovi korišćenja'
    }
  },

  hi: {
    nav: { watchOnline: 'ऑनलाइन देखें', features: 'विशेषताएं', access: 'पहुंच' },
    hero: {
      eyebrow: 'TikTok 18+ · केवल वयस्कों के लिए (+18)',
      title: 'वयस्कों के लिए <br><em>TikTok</em>',
      desc: 'बिना किसी सेंसरशिप और बिना किसी रोक-टोक के हॉट शॉर्ट वीडियो। कामुक सामग्री, निजी लाइव स्ट्रीम और विशेष फीड — बिल्कुल टिकटॉक जैसा, लेकिन पूरी तरह 18+।',
      btnWatch: 'ऑनलाइन देखें',
      btnExplore: 'और जानें',
      live: 'लाइव 1080p',
      devices: 'मोबाइल और पीसी',
      anonymous: '100% गोपनीय और सुरक्षित'
    },
    stats: {
      users: 'सक्रिय उपयोगकर्ता',
      videos: 'हॉट वीडियो',
      label18: 'केवल 18+',
      satisfaction: 'संतुष्टि'
    },
    features: {
      tag: 'विशिष्ट सुविधाएं',
      title: 'अगली पीढ़ी की 18+ स्ट्रीमिंग',
      desc: 'पूरी गोपनीयता और प्रीमियम गुणवत्ता के साथ बनाई गई सबसे साहसिक वयस्क प्लेटफॉर्म का अनुभव करें।',
      item1Title: 'बिना सेंसर की लाइव स्ट्रीमिंग',
      item1Desc: 'पूर्ण बातचीत और निजी वीआईपी कमरों के साथ रीयल-टाइम प्रसारण।',
      item2Title: 'स्मार्ट सिफारिश फीड',
      item2Desc: 'एआई एल्गोरिदम आपकी पसंद के अनुसार सबसे हॉट क्लिप चुनता है।',
      item3Title: 'एचडी वीडियो गुणवत्ता',
      item3Desc: 'किसी भी फोन या कंप्यूटर पर सहज प्लेबैक के लिए स्पष्ट 1080p स्ट्रीमिंग।',
      item4Title: 'क्रिएटर्स से सीधा संवाद',
      item4Desc: 'चैट करें, रिएक्शन भेजें और लाइव के दौरान सीधे प्राइवेट शो का अनुरोध करें।',
      item5Title: 'अल्ट्रा फास्ट लोडिंग',
      item5Desc: 'अनुकूली बिटरेट के साथ बिना किसी रुकावट के त्वरित वीडियो प्लेबैक।',
      item6Title: 'प्रतिदिन नया कंटेंट',
      item6Desc: 'चौबीसों घंटे हजारों नए वीडियो और लाइव स्ट्रीम जोड़े जाते हैं।',
      item7Title: '100% अनाम मोड',
      item7Desc: 'पूर्ण गोपनीयता: बिना किसी इतिहास या ट्रैकिंग के सब कुछ देखें।',
      item8Title: 'ब्राउज़र में सीधे देखें',
      item8Desc: 'बिना किसी ऐप को डाउनलोड किए फोन ब्राउज़र में तुरंत देखें।'
    },
    steps: {
      tag: 'एक्सेस कैसे करें',
      title: '1 मिनट से भी कम समय में देखना शुरू करें',
      step1Title: '«ऑनलाइन देखें» पर टैप करें',
      step1Desc: 'त्वरित एक्सेस बटन दबाएं',
      step2Title: 'प्लान चुनें',
      step2Desc: '3 या 6 महीने की अवधि चुनें',
      step3Title: 'भुगतान चुनें',
      step3Desc: 'ETH से सुरक्षित भुगतान करें',
      step4Title: 'वॉलेट कनेक्ट करें',
      step4Desc: '1 क्लिक में लेनदेन की पुष्टि करें',
      step5Title: 'शो का आनंद लें!',
      step5Desc: 'अनंत वीडियो और लाइव स्ट्रीम का आनंद लें'
    },
    banner: {
      tag: '1-क्लिक प्रीमियम एक्सेस',
      title: 'असीमित एक्सेस <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'सभी बिना सेंसर वाले वीडियो और निजी लाइव स्ट्रीम तक तुरंत पहुंच। Ethereum से सुरक्षित भुगतान करें।',
      plan3m: '3 महीने — $0.99',
      plan6m: '6 महीने — $2.99',
      bestValue: 'सबसे किफायती',
      btn: 'तुरंत एक्सेस पाएं'
    },
    widget: {
      title: '🔓 असीमित एक्सेस',
      subtitle: 'अपनी एक्सेस अवधि चुनें',
      plan3m: '3 महीने',
      plan6m: '6 महीने',
      unlimited: 'असीमित एक्सेस',
      bestValue: 'सबसे किफायती',
      selectPayment: 'भुगतान विधि चुनें',
      usdt: 'USDT',
      tron: 'TRON / TRC20 नेटवर्क',
      eth: 'Ethereum',
      ethNet: 'ETH नेटवर्क',
      warning: 'कृपया सुनिश्चित करें कि आपका वॉलेट चयनित नेटवर्क से जुड़ा है।',
      connectBtn: 'वॉलेट कनेक्ट करें',
      secure: 'WalletConnect द्वारा सुरक्षित कनेक्शन',
      connected: 'वॉलेट कनेक्ट हो गया',
      plan: 'प्लान',
      network: 'नेटवर्क',
      crypto: 'क्रिप्टोकरेंसी',
      total: 'कुल देय',
      payBtn: 'भुगतान के लिए आगे बढ़ें',
      statusConnecting: 'वॉलेट कनेक्ट हो रहा है...',
      statusConnectingDesc: 'सुरक्षित WalletConnect सत्र प्रारंभ हो रहा है...',
      statusWaiting: 'पुष्टि की प्रतीक्षा है',
      statusWaitingDesc: 'कृपया अपने क्रिप्टो वॉलेट में लेनदेन की पुष्टि करें।',
      statusVerifying: 'लेनदेन का सत्यापन हो रहा है...',
      statusVerifyingDesc: 'ब्लॉकचेन पुष्टि की प्रतीक्षा की जा रही है...',
      statusConfirmed: 'भुगतान सफल रहा ✓',
      statusActivated: 'असीमित एक्सेस सक्रिय हो गया है',
      continueBtn: 'जारी रखें',
      errorTitle: 'भुगतान विफल रहा',
      errorDesc: 'लेनदेन संसाधित करते समय एक त्रुटि हुई।',
      retryBtn: 'पुनः प्रयास करें'
    },
    cta: {
      tag: 'सीधा ऑनलाइन एक्सेस',
      title: 'सबसे हॉट शो देखने के लिए <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">तैयार हैं?</em>',
      desc: 'अभी TikTok 18+ में ऑनलाइन प्रवेश करें। सैकड़ों क्रिएटर्स इस समय लाइव प्रसारण कर रहे हैं।',
      btn: 'ऑनलाइन देखें',
      caption: 'लाइव स्ट्रीमिंग · केवल 18 वर्ष से अधिक आयु के लिए · 100% गोपनीय'
    },
    footer: {
      copy: '© 2026 TikTok 18+. सर्वाधिकार सुरक्षित। केवल वयस्कों के लिए।',
      features: 'विशेषताएं',
      privacy: 'गोपनीयता नीति',
      terms: 'उपयोग की शर्तें'
    }
  },

  id: {
    nav: { watchOnline: 'Tonton Online', features: 'Fitur', access: 'Akses' },
    hero: {
      eyebrow: 'TikTok 18+ · Khusus Dewasa (+18)',
      title: 'TikTok untuk <br><em>Dewasa</em>',
      desc: 'Video pendek panas tanpa sensor dan tanpa batasan. Konten erotis, siaran langsung pribadi, dan feed eksklusif — persis seperti TikTok, tetapi khusus 18+.',
      btnWatch: 'Tonton Online',
      btnExplore: 'Jelajahi Fitur',
      live: 'Live 1080p',
      devices: 'Ponsel & PC',
      anonymous: '100% Anonim & Aman'
    },
    stats: {
      users: 'Pengguna Aktif',
      videos: 'Video Panas',
      label18: 'Khusus 18+',
      satisfaction: 'Kepuasan'
    },
    features: {
      tag: 'FITUR EKSKLUSIF',
      title: 'Streaming dewasa generasi berikutnya',
      desc: 'Nikmati platform dewasa paling berani yang dirancang untuk privasi penuh dan kualitas premium.',
      item1Title: 'Live Streaming Tanpa Sensor',
      item1Desc: 'Siaran langsung interaktif dengan pertunjukan berani dan ruang VIP privat.',
      item2Title: 'Feed Rekomendasi Cerdas',
      item2Desc: 'Algoritma AI memilih video terpanas yang disesuaikan khusus dengan selera Anda.',
      item3Title: 'Kualitas Video HD',
      item3Desc: 'Streaming 1080p yang jernih dan lancar dioptimalkan untuk semua smartphone.',
      item4Title: 'Interaksi Langsung dengan Kreator',
      item4Desc: 'Kirim pesan, reaksi, dan minta pertunjukan pribadi langsung saat siaran berlangsung.',
      item5Title: 'Pemuatan Sangat Cepat',
      item5Desc: 'Pemutaran video instan tanpa jeda dengan bitrate adaptif.',
      item6Title: 'Konten Baru Setiap Hari',
      item6Desc: 'Ribuan video dan live streaming baru ditambahkan sepanjang waktu 24/7.',
      item7Title: 'Mode 100% Anonim',
      item7Desc: 'Privasi mutlak terjamin: tonton semuanya tanpa riwayat atau pelacakan.',
      item8Title: 'Putar Langsung di Browser',
      item8Desc: 'Akses langsung dari browser ponsel tanpa perlu mengunduh aplikasi tambahan.'
    },
    steps: {
      tag: 'CARA MENGAKSES',
      title: 'Mulai menonton dalam waktu kurang dari 1 menit',
      step1Title: 'Ketuk «Tonton Online»',
      step1Desc: 'Tekan tombol akses instan',
      step2Title: 'Pilih Paket Akses',
      step2Desc: 'Pilih periode 3 atau 6 bulan',
      step3Title: 'Pilih Pembayaran',
      step3Desc: 'Bayar aman dengan ETH',
      step4Title: 'Hubungkan Dompet',
      step4Desc: 'Konfirmasi transaksi hanya dengan 1 klik',
      step5Title: 'Nikmati Acaranya!',
      step5Desc: 'Ribuan video dan siaran langsung tanpa batas'
    },
    banner: {
      tag: 'AKSES PREMIUM 1-KLIK',
      title: 'Akses Tanpa Batas ke <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">TikTok 18+</em>',
      desc: 'Akses instan dan tanpa batas ke semua video tanpa sensor dan live privat. Bayar aman dengan Ethereum.',
      plan3m: '3 bulan — $0.99',
      plan6m: '6 bulan — $2.99',
      bestValue: 'PILIHAN TERBAIK',
      btn: 'Dapatkan Akses Sekarang'
    },
    widget: {
      title: '🔓 AKSES TANPA BATAS',
      subtitle: 'Pilih periode akses Anda',
      plan3m: '3 BULAN',
      plan6m: '6 BULAN',
      unlimited: 'Akses Tanpa Batas',
      bestValue: 'PILIHAN TERBAIK',
      selectPayment: 'PILIH METODE PEMBAYARAN',
      usdt: 'USDT',
      tron: 'Jaringan TRON / TRC20',
      eth: 'Ethereum',
      ethNet: 'Jaringan ETH Network',
      warning: 'Pastikan dompet Anda terhubung ke jaringan yang dipilih.',
      connectBtn: 'HUBUNGKAN DOMPET',
      secure: 'Koneksi aman melalui WalletConnect',
      connected: 'Dompet terhubung',
      plan: 'Paket',
      network: 'Jaringan',
      crypto: 'Kripto',
      total: 'Total Pembayaran',
      payBtn: 'Lanjut ke Pembayaran',
      statusConnecting: 'Menghubungkan dompet...',
      statusConnectingDesc: 'Memulai sesi aman WalletConnect...',
      statusWaiting: 'Menunggu konfirmasi',
      statusWaitingDesc: 'Silakan konfirmasi transaksi di dompet kripto Anda.',
      statusVerifying: 'Memverifikasi transaksi...',
      statusVerifyingDesc: 'Menunggu konfirmasi di blockchain...',
      statusConfirmed: 'Pembayaran Dikonfirmasi ✓',
      statusActivated: 'Akses tanpa batas telah aktif',
      continueBtn: 'Lanjutkan',
      errorTitle: 'Pembayaran Gagal',
      errorDesc: 'Terjadi kesalahan saat memproses transaksi.',
      retryBtn: 'Coba Lagi'
    },
    cta: {
      tag: 'AKSES LANGSUNG ONLINE',
      title: 'Siap untuk pertunjukan paling <em style="font-style:normal;background:linear-gradient(120deg,#f0173e,#ff6a8a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">panas?</em>',
      desc: 'Masuk ke TikTok 18+ online sekarang. Ratusan kreator sedang melakukan siaran langsung saat ini.',
      btn: 'Tonton Online',
      caption: 'Live Streaming · Khusus 18 Tahun ke Atas · 100% Rahasia'
    },
    footer: {
      copy: '© 2026 TikTok 18+. Semua hak dilindungi undang-undang. Khusus dewasa.',
      features: 'Fitur',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat Penggunaan'
    }
  }
};

// ─── Language Detector & Setter ───
let currentLang = 'en';

export function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
}

export function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;
  try {
    localStorage.setItem('tiktok18_lang', lang);
  } catch(e) {}

  document.documentElement.lang = lang;

  // Apply to all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getNestedTranslation(TRANSLATIONS[lang], key);
    if (text) {
      el.innerHTML = text;
    }
  });

  // Update language switcher dropdown display
  const langSelect = document.getElementById('langSelect');
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  // Dispatch custom event for widgets to re-render
  window.dispatchEvent(new CustomEvent('tiktok18:langChanged', { detail: { lang } }));
}

export function getCurrentLang() {
  return currentLang;
}

export async function detectVisitorLanguage() {
  // Always default to English upon opening the page as requested
  return 'en';
}

export async function initI18n() {
  const lang = await detectVisitorLanguage();
  setLanguage(lang);
  return lang;
}

if (typeof window !== 'undefined') {
  window.i18n = {
    SUPPORTED_LANGS,
    TRANSLATIONS,
    getNestedTranslation,
    setLanguage,
    getCurrentLang,
    detectVisitorLanguage,
    initI18n,
    t: (path) => getNestedTranslation(TRANSLATIONS[currentLang] || TRANSLATIONS.en, path) || path
  };
}
