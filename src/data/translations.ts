import { Language } from '../types';

export interface Translations {
  // Common
  close: string;
  categoryAll: string;
  currencySom: string;

  // Header & Navigation
  navHome: string;
  navMenu: string;
  navPromos: string;
  navDelivery: string;
  navAbout: string;
  navContacts: string;
  navBookTable: string;
  navTrackOrder: string;
  navCart: string;
  topDeliveryFree: string;
  topOpenHours: string;
  topWorkingToday: string;
  searchPlaceholder: string;
  searchResult: string;
  clearSearch: string;

  // Mobile Bottom Nav
  mobileNavMenu: string;
  mobileNavPromos: string;
  mobileNavBooking: string;
  mobileNavOrders: string;

  // Hero Section
  heroBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroOrderBtn: string;
  heroMenuBtn: string;
  heroPromoCardTitle: string;
  heroPromoCardSub: string;
  heroPromoBadge: string;
  heroStat1Value: string;
  heroStat1Label: string;
  heroStat2Value: string;
  heroStat2Label: string;
  heroStat3Value: string;
  heroStat3Label: string;
  heroFeaturesFresh: string;
  heroFeaturesHalal: string;
  heroFeaturesFast: string;

  // Menu section & filters
  menuSectionBadge: string;
  menuSectionTitle: string;
  menuSectionSub: string;
  menuFilterAll: string;
  dishNotFoundTitle: string;
  dishNotFoundDesc: string;

  // Dish Card & Modals
  dishAddToCart: string;
  dishAddToCartTotal: string;
  dishAddedSuccess: string;
  dishInCart: string;
  dishDetailsBtn: string;
  dishIngredients: string;
  dishComposition: string;
  dishNutrition: string;
  dishCalories: string;
  dishKcal: string;
  dishPrepTime: string;
  dishWeight: string;
  dishPortion: string;
  dishSpiciness: string;
  dishSpicyMild: string;
  dishSpicyMedium: string;
  dishSpicyHot: string;
  dishExtraSauce: string;
  dishChopsticks: string;
  dishQuantity: string;
  dishCurrency: string;
  dishHalalTag: string;
  dishPopularTag: string;
  dishSpicyTag: string;
  dishNewTag: string;
  dishBadgePopular: string;
  dishBadgeHalal: string;
  dishBadgeSpicy: string;
  dishBadgeNew: string;
  dishNotesLabel: string;
  dishNotesPlaceholder: string;

  // Cart Drawer
  cartTitle: string;
  cartEmptyTitle: string;
  cartEmptySub: string;
  cartEmptyBtn: string;
  cartClearAll: string;
  cartSubtotal: string;
  cartDiscount: string;
  cartDeliveryFee: string;
  cartDeliveryFree: string;
  cartFreeDeliveryProgress: string;
  cartFreeDeliveryUnlocked: string;
  cartPromoPlaceholder: string;
  cartPromoApply: string;
  cartPromoApplied: string;
  cartPromoRemove: string;
  cartTotal: string;
  cartCheckoutBtn: string;
  cartPickupDiscountNote: string;

  // Checkout Modal
  checkoutTitle: string;
  checkoutSubtitle: string;
  checkoutTypeDelivery: string;
  checkoutTypePickup: string;
  checkoutPickupHint: string;
  checkoutFullName: string;
  checkoutName: string;
  checkoutNamePlaceholder: string;
  checkoutNameRequired: string;
  checkoutPhone: string;
  checkoutPhonePlaceholder: string;
  checkoutPhoneRequired: string;
  checkoutAddress: string;
  checkoutAddressRequired: string;
  checkoutStreet: string;
  checkoutStreetPlaceholder: string;
  checkoutHouse: string;
  checkoutHousePlaceholder: string;
  checkoutApt: string;
  checkoutFloor: string;
  checkoutIntercom: string;
  checkoutComment: string;
  checkoutCommentPlaceholder: string;
  checkoutPaymentMethod: string;
  checkoutPayCash: string;
  checkoutPayCashDesc: string;
  checkoutPayCard: string;
  checkoutPayCardDesc: string;
  checkoutPayMbank: string;
  checkoutPayMbankDesc: string;
  checkoutPayQr: string;
  checkoutPayQrDesc: string;
  checkoutOrderSummary: string;
  checkoutItemsCount: string;
  checkoutFinalTotal: string;
  checkoutSubmitBtn: string;

  // Success Modal
  successBadge: string;
  successTitle: string;
  successSubtitle: string;
  successOrderNumber: string;
  successEstTime: string;
  successEstDuration: string;
  successWhatsAppBtn: string;
  successWhatsAppNote: string;
  successTrackOrderBtn: string;
  successBackToMenu: string;

  // Table Booking Modal
  bookingTitle: string;
  bookingSubtitle: string;
  bookingName: string;
  bookingPhone: string;
  bookingDate: string;
  bookingTime: string;
  bookingGuests: string;
  bookingPerson: string;
  bookingOccasion: string;
  bookingOccasionPlaceholder: string;
  bookingWishes: string;
  bookingWishesPlaceholder: string;
  bookingSubmitBtn: string;
  bookingSuccessTitle: string;
  bookingSuccessMsg: string;
  bookingConfirmedTitle: string;
  bookingConfirmedText: string;
  bookingConfirmedPost: string;
  bookingClose: string;
  bookingCloseBtn: string;
  bookingInfoNote: string;

  // Tracker Modal
  trackerTitle: string;
  trackerSubtitle: string;
  trackerEmptyTitle: string;
  trackerEmptySub: string;
  trackerInputPlaceholder: string;
  trackerSearchBtn: string;
  trackerOrderProgress: string;
  trackerCurrent: string;
  trackerNotFound: string;
  trackerRecentOrders: string;
  trackerStatus: string;
  trackerStep1: string;
  trackerStep1Desc: string;
  trackerStep2: string;
  trackerStep2Desc: string;
  trackerStep3: string;
  trackerStep3Desc: string;
  trackerStep4: string;
  trackerStep4Desc: string;
  trackerNextStepSim: string;
  trackerHaveQuestions: string;

  // Promotions Section
  promosBadge: string;
  promosTitle: string;
  promosSubtitle: string;
  promosCopyCode: string;
  promosCopied: string;
  promosApplyCode: string;
  promosOrderCategory: string;
  promosViewCategory: string;
  promoApplied: string;
  promoCopy: string;

  // Delivery Section
  deliveryBadge: string;
  deliveryTitle: string;
  deliverySubtitle: string;
  deliveryFeat1Title: string;
  deliveryFeat1Desc: string;
  deliveryFeat2Title: string;
  deliveryFeat2Desc: string;
  deliveryFeat3Title: string;
  deliveryFeat3Desc: string;
  deliveryZonesTitle: string;
  deliveryZone1Title: string;
  deliveryZone1Desc: string;
  deliveryZone2Title: string;
  deliveryZone2Desc: string;
  deliveryPickupTitle: string;
  deliveryPickupDesc: string;
  deliveryDispatchPoint: string;
  deliveryScheduleNote: string;

  // About Section
  aboutBadge: string;
  aboutTitle1: string;
  aboutTitleHighlight: string;
  aboutTitle2: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutStatHalal: string;
  aboutStatExperience: string;
  aboutStatReviews: string;
  aboutBannerQuote: string;
  aboutBannerSub: string;
  aboutGuestReviewsTitle: string;
  aboutGuestReviewsSub: string;

  // Contact Section
  contactBadge: string;
  contactTitle: string;
  contactSubtitle: string;
  contactOurAddress: string;
  contactAddressLandmark: string;
  contactPhone: string;
  contactFastCall: string;
  contactSms: string;
  contactSendSms: string;
  contactWhatsApp: string;
  contactOnlineChat: string;
  contactInstagram: string;
  contactInstagramFollow: string;
  contactWorkHoursTitle: string;
  contactWorkHoursDaily: string;
  contactKitchenClose: string;
  contactFormTitle: string;
  contactFormSubtitle: string;
  contactFormSuccessTitle: string;
  contactFormSuccessDesc: string;
  contactFormMsgLabel: string;
  contactFormMsgPlaceholder: string;
  contactFormSubmit: string;

  // Footer
  footerDescription: string;
  footerLangTitle: string;
  footerQuickNav: string;
  footerRights: string;
  footerMadeWithLove: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  kg: {
    close: 'Жабуу',
    categoryAll: 'Бардык менюну көрүү',
    currencySom: 'сом',

    navHome: 'Башкы бет',
    navMenu: 'Меню',
    navPromos: 'Акциялар',
    navDelivery: 'Жеткирүү',
    navAbout: 'Биз жөнүндө',
    navContacts: 'Байланыш',
    navBookTable: 'Стол ээлөө',
    navTrackOrder: 'Заказ абалы',
    navCart: 'Себет',
    topDeliveryFree: '1000 сомдон жогору буйрутмаларга жеткирүү АКЫСЫЗ!',
    topOpenHours: 'Күн сайын 10:00 – 23:00',
    topWorkingToday: 'Ачыкпыз',
    searchPlaceholder: 'Тамак издөө (ролл, пицца, рамен...)',
    searchResult: 'Издөө натыйжасы:',
    clearSearch: 'Тазалоо',

    mobileNavMenu: 'Меню',
    mobileNavPromos: 'Акциялар',
    mobileNavBooking: 'Стол ээлөө',
    mobileNavOrders: 'Заказдар',

    heroBadge: 'MAEZO КАФЕСИ & ТЕЗ ЖЕТКИРҮҮ',
    heroTitle1: 'Жапон & Азия даамдары —',
    heroTitleHighlight: 'чыныгы ырахат',
    heroTitle2: 'жана жылуу маанай.',
    heroSubtitle: 'Жаңы балыктан жасалган ширелүү роллдор, 12 сааттык бай сорполуу рамен жана меште бышкан ысык пицца. Чолпон-Ата боюнча 35 мүнөттө эшигиңизге жеткиребиз!',
    heroOrderBtn: 'Заказ берүү',
    heroMenuBtn: 'Менюну көрүү',
    heroPromoCardTitle: 'Экинчи роллго -50%',
    heroPromoCardSub: 'Бардык филадельфия жана темпураларга',
    heroPromoBadge: 'АКЦИЯ',
    heroStat1Value: '35 мин',
    heroStat1Label: 'Орточо жеткирүү',
    heroStat2Value: '4.9 ★',
    heroStat2Label: '2000+ конок баасы',
    heroStat3Value: '100%',
    heroStat3Label: 'Халал сапат',
    heroFeaturesFresh: 'Жаңы азыктар',
    heroFeaturesHalal: '100% Халал',
    heroFeaturesFast: 'Ысык жеткирүү',

    menuSectionBadge: 'Даамдуу & Сапаттуу Меню',
    menuSectionTitle: 'MAEZO Менюсу',
    menuSectionSub: 'Сүйүктүү тамагыңызды тандап, бир чыкылдатуу менен себетке кошуңуз.',
    menuFilterAll: 'Бардыгы',
    dishNotFoundTitle: 'Тамак табылган жок',
    dishNotFoundDesc: 'Башка категорияны тандап же издөө сөзүн өзгөртүп көрүңүз.',

    dishAddToCart: 'Себетке кошуу',
    dishAddToCartTotal: 'Себетке кошуу',
    dishAddedSuccess: 'Себетке кошулду!',
    dishInCart: 'Себетте',
    dishDetailsBtn: 'Кененирээк',
    dishIngredients: 'Курамы:',
    dishComposition: 'Сүрөттөлүшү жана курамы',
    dishNutrition: 'Энергетикалык баалуулугу:',
    dishCalories: 'ккал',
    dishKcal: 'ккал',
    dishPrepTime: 'Даярдоо убактысы:',
    dishWeight: 'Салмагы:',
    dishPortion: 'Порция',
    dishSpiciness: 'Ачуулугу:',
    dishSpicyMild: 'Жумшак',
    dishSpicyMedium: 'Орточо',
    dishSpicyHot: 'Абдан ачуу 🔥',
    dishExtraSauce: 'Кошумча соус (+30 сом)',
    dishChopsticks: 'Таякчалар саны:',
    dishQuantity: 'Саны:',
    dishCurrency: 'сом',
    dishHalalTag: 'Халал',
    dishPopularTag: 'ХИТ',
    dishSpicyTag: 'Ачуу',
    dishNewTag: 'ЖАҢЫ',
    dishBadgePopular: 'ХИТ',
    dishBadgeHalal: '100% Халал',
    dishBadgeSpicy: 'Ачуу',
    dishBadgeNew: 'Жаңы',
    dishNotesLabel: 'Ашпозчуга өзгөчө эскертүү (каалоо боюнча):',
    dishNotesPlaceholder: 'Мисалы: Пияз салбаңыз, ачуусун азыраак кылыңыз...',

    cartTitle: 'Сиздин Себетиңиз',
    cartEmptyTitle: 'Себетиңиз азырынча бош',
    cartEmptySub: 'Менюдан каалаган даамдуу тамакты тандап, бул жерге кошуңуз!',
    cartEmptyBtn: 'Менюга өтүү',
    cartClearAll: 'Тазалоо',
    cartSubtotal: 'Тамактардын суммасы',
    cartDiscount: 'Жеңилдик',
    cartDeliveryFee: 'Жеткирүү акысы',
    cartDeliveryFree: 'Акысыз',
    cartFreeDeliveryProgress: 'Акысыз жеткирүүгө чейин:',
    cartFreeDeliveryUnlocked: 'Куттуктайбыз! Сизге жеткирүү АКЫСЫЗ 🎉',
    cartPromoPlaceholder: 'Промокод (мис. MAEZO15)',
    cartPromoApply: 'Колдонуу',
    cartPromoApplied: 'Колдонулду',
    cartPromoRemove: 'Өчүрүү',
    cartTotal: 'Жалпы сумма',
    cartCheckoutBtn: 'Буйрутманы тариздөө',
    cartPickupDiscountNote: 'Кафеден өзүңүз алып кетсеңиз -10% жеңилдик берилет!',

    checkoutTitle: 'Буйрутманы Тариздөө',
    checkoutSubtitle: 'Маалыматтарды толтуруңуз, биз дароо даярдай баштайбыз',
    checkoutTypeDelivery: '🚗 Жеткирүү',
    checkoutTypePickup: '🏃 Кафеден өзүм алам (-10%)',
    checkoutPickupHint: 'Кафеден алып кетүү дареги: Чолпон-Ата шаары, Советская 73. Буйрутма 20 мүнөттө даяр болот.',
    checkoutFullName: 'Аты-жөнүңүз',
    checkoutName: 'Аты-жөнүңүз',
    checkoutNamePlaceholder: 'Атыңызды жазыңыз',
    checkoutNameRequired: 'Атыңызды жазыңыз',
    checkoutPhone: 'Телефон номериңиз',
    checkoutPhonePlaceholder: '0708 087 608',
    checkoutPhoneRequired: 'Телефон номериңизди жазыңыз',
    checkoutAddress: 'Жеткирүү дареги',
    checkoutAddressRequired: 'Даректи жазыңыз',
    checkoutStreet: 'Көчө жана үй номери',
    checkoutStreetPlaceholder: 'Мисалы: Советская 73',
    checkoutHouse: 'Үй / Корпус',
    checkoutHousePlaceholder: '128 / А',
    checkoutApt: 'Батир / Офис',
    checkoutFloor: 'Кабат',
    checkoutIntercom: 'Домофон коду',
    checkoutComment: 'Курьерге же ашпозчуга кошумча эскертүү',
    checkoutCommentPlaceholder: 'Мисалы: Эшик коңгуроосун баспаңыз, бала уктап жатат...',
    checkoutPaymentMethod: 'Төлөм түрү',
    checkoutPayCash: 'Накталай курьерге',
    checkoutPayCashDesc: 'Тамакты алганда накталай төлөө',
    checkoutPayCard: 'Карта аркылуу (POS)',
    checkoutPayCardDesc: 'Курьердин терминалы аркылуу карта менен',
    checkoutPayMbank: 'MBank / Элсом / О!Деньги',
    checkoutPayMbankDesc: 'Мобилдик тиркеме аркылуу которуу',
    checkoutPayQr: 'QR-код аркылуу',
    checkoutPayQrDesc: 'Улуттук QR же банктык QR төлөм',
    checkoutOrderSummary: 'Буйрутма жыйынтыгы',
    checkoutItemsCount: 'тамак',
    checkoutFinalTotal: 'Төлөнүүчү сумма',
    checkoutSubmitBtn: 'Буйрутманы тастыктоо',

    successBadge: 'Ийгиликтүү!',
    successTitle: 'Буйрутмаңыз кабыл алынды!',
    successSubtitle: 'Биздин оператор 3 мүнөттүн ичинде байланышып, заказды ырастайт.',
    successOrderNumber: 'Заказ номери',
    successEstTime: 'Болжолдуу убактысы',
    successEstDuration: '30-40 мүнөт',
    successWhatsAppBtn: 'WhatsApp аркылуу жөнөтүү',
    successWhatsAppNote: 'Заказдын маалыматын WhatsApp аркылуу кафеге түз жөнөтүңүз',
    successTrackOrderBtn: 'Заказдын абалын көрүү',
    successBackToMenu: 'Башкы бетке кайтуу',

    bookingTitle: 'Стол ээлөө',
    bookingSubtitle: 'MAEZO кафесине орун брондоо',
    bookingName: 'Аты-жөнүңүз',
    bookingPhone: 'Телефон номери',
    bookingDate: 'Күнү',
    bookingTime: 'Убактысы',
    bookingGuests: 'Адамдардын саны',
    bookingPerson: 'адам',
    bookingOccasion: 'Окуя / Майрам',
    bookingOccasionPlaceholder: 'Мисалы: Туулган күн, кечки жолугушуу...',
    bookingWishes: 'Өзгөчө каалоолор',
    bookingWishesPlaceholder: 'Мисалы: Терезенин жанынан тынч орун...',
    bookingSubmitBtn: 'Брондоону ырастоо',
    bookingSuccessTitle: 'Стол ийгиликтүү брондолду!',
    bookingSuccessMsg: 'Рахмат! Биз сизди белгиленген убакытта күтөбүз.',
    bookingConfirmedTitle: 'Стол брондолду!',
    bookingConfirmedText: 'Биз сиз менен',
    bookingConfirmedPost: 'номери аркылуу байланышып, столду ырастайбыз.',
    bookingClose: 'Жабуу',
    bookingCloseBtn: 'Жабуу',
    bookingInfoNote: 'Брондоо акысыз. Биз сизге 10 мүнөттө чалып тастыктайбыз.',

    trackerTitle: 'Заказдардын абалы',
    trackerSubtitle: 'Сиздин активдүү жана мурунку заказдарыңыз',
    trackerEmptyTitle: 'Активдүү заказдар жок',
    trackerEmptySub: 'Менюдан каалаган тамакты тандап, онлайн заказ бериңиз!',
    trackerInputPlaceholder: 'Заказ ID же телефон номери...',
    trackerSearchBtn: 'Издөө',
    trackerOrderProgress: 'Заказдын даярдалуу этаптары',
    trackerCurrent: 'Азыркы этап',
    trackerNotFound: 'Бул ID боюнча заказ табылган жок',
    trackerRecentOrders: 'Акыркы заказдар',
    trackerStatus: 'Абалы:',
    trackerStep1: 'Кабыл алынды',
    trackerStep1Desc: 'Оператор заказды ырастады',
    trackerStep2: 'Даярдалууда',
    trackerStep2Desc: 'Ашпозчу тамакты жасап жатат',
    trackerStep3: 'Жолдо',
    trackerStep3Desc: 'Курьер дарекке жөнөдү',
    trackerStep4: 'Жеткирилди',
    trackerStep4Desc: 'Тамагыңыз таттуу болсун!',
    trackerNextStepSim: '(Статусту кийинки этапка жылдыруу ➔)',
    trackerHaveQuestions: 'Суроолор барбы?',

    promosBadge: 'Атайын Сунуштар',
    promosTitle: 'Акциялар жана Комболор',
    promosSubtitle: 'Арзандатуулардан пайдаланып, даамдуу тамактарды үнөмдүү заказ кылыңыз!',
    promosCopyCode: 'Көчүрүү',
    promosCopied: 'Көчүрүлдү!',
    promosApplyCode: 'Себетке колдонуу',
    promosOrderCategory: 'Бөлүмдү ачуу',
    promosViewCategory: 'Категорияны көрүү',
    promoApplied: 'Колдонулду!',
    promoCopy: 'Көчүрүү',

    deliveryBadge: 'Ылдам & Ишенимдүү',
    deliveryTitle: 'Шаар боюнча жеткирүү шарттары',
    deliverySubtitle: 'Биз тамактарды атайын термо-баштыктарда ысык жана жаңы бойдон жеткиребиз.',
    deliveryFeat1Title: 'Ылдам жеткирүү',
    deliveryFeat1Desc: 'Чолпон-Ата шаары ичинде орточо 30-40 мүнөттө дарекке жетет.',
    deliveryFeat2Title: 'Термо-кутулар',
    deliveryFeat2Desc: 'Тамактар ысык жана жаңы бойдон сакталат.',
    deliveryFeat3Title: 'Коопсуздук & Халал',
    deliveryFeat3Desc: 'Бардык санитардык талаптар жана 100% Халал стандарттар сакталат.',
    deliveryZonesTitle: 'Жеткирүү тарифтери жана аймактары',
    deliveryZone1Title: 'Шаар борбору',
    deliveryZone1Desc: '120 сом (1000 сомдон жогору АКЫСЫЗ)',
    deliveryZone2Title: 'Түштүк микрорайондор жана конуштар',
    deliveryZone2Desc: '150-200 сом (1500 сомдон жогору АКЫСЫЗ)',
    deliveryPickupTitle: 'Кафеден өзүңүз алып кетүү',
    deliveryPickupDesc: 'Бардык менюга -10% арзандатуу',
    deliveryDispatchPoint: 'Жөнөтүү пункту',
    deliveryScheduleNote: 'Жеткирүү кызматы күн сайын 10:00дөн 22:30га чейин иштейт.',

    aboutBadge: 'Кафенин Философиясы',
    aboutTitle1: 'Биз жөн гана тамак жасабайбыз — биз',
    aboutTitleHighlight: 'жылуу маанай',
    aboutTitle2: 'тартуулайбыз.',
    aboutParagraph1: 'MAEZO — шаардын чок ортосунда жайгашкан кичинекей, бирок абдан уюткулуу жана заманбап кафе. Биздин максатыбыз — жапон жана азия ашканасынын чыныгы даамын шаардык ыңгайлуулук менен жеткирүү.',
    aboutParagraph2: 'Ар бир рамендин сорпосун 12 саат бою жай кайнатып, роллдорду эң сапаттуу лосось жана тобико менен гана даярдайбыз. Бул жерде сиз досторуңуз менен баарлашып же үйүңүзгө даамдуу тамак заказ кыла аласыз.',
    aboutStatHalal: 'Халал сапат',
    aboutStatExperience: 'Жылдык тажрыйба',
    aboutStatReviews: 'Коноктордун баасы',
    aboutBannerQuote: '«Эң мыкты ингредиенттер жана сүйүү менен даярдалган тамактар»',
    aboutBannerSub: 'MAEZO кафесинин командасы',
    aboutGuestReviewsTitle: 'Биздин коноктордун пикирлери',
    aboutGuestReviewsSub: 'Сиздин канааттанууңуз — биздин башкы сыйлыгыбыз',

    contactBadge: 'Байланыш',
    contactTitle: 'Биз менен байланышыңыз',
    contactSubtitle: 'Суроолоруңуз же сунуштарыңыз болсо, биз ар дайым байланыштабыз',
    contactOurAddress: 'Биздин дарек',
    contactAddressLandmark: 'Чолпон-Ата шаары, Советская 73',
    contactPhone: 'Телефон чалуу',
    contactFastCall: 'Дароо чалуу',
    contactSms: 'SMS билдирүү',
    contactSendSms: 'SMS жөнөтүү',
    contactWhatsApp: 'WhatsApp',
    contactOnlineChat: 'Онлайн жазуу',
    contactInstagram: 'Instagram',
    contactInstagramFollow: 'Баракчага өтүү',
    contactWorkHoursTitle: 'Иш убактысы',
    contactWorkHoursDaily: 'Күн сайын: 10:00 — 23:00',
    contactKitchenClose: 'Ашкана 22:30га чейин буйрутма кабыл алат',
    contactFormTitle: 'Бизге билдирүү калтырыңыз',
    contactFormSubtitle: 'Биз сиздин сурооңузга мүмкүн болушунча тез жооп беребиз',
    contactFormSuccessTitle: 'Билдирүүңүз жөнөтүлдү!',
    contactFormSuccessDesc: 'Рахмат! Биздин менеджер жакында байланышат.',
    contactFormMsgLabel: 'Билдирүүңүз',
    contactFormMsgPlaceholder: 'Сурооңузду же сунушуңузду жазыңыз...',
    contactFormSubmit: 'Билдирүүнү жөнөтүү',

    footerDescription: 'MAEZO — заманбап жана уюткулуу шаардык кафе. Эң жаңы балыктан жасалган ширелүү роллдор, 12 сааттык бай сорполуу рамен жана меште бышкан ысык пицца.',
    footerLangTitle: 'Тилди тандоо',
    footerQuickNav: 'Тез багыттоо',
    footerRights: 'Бардык укуктар корголгон.',
    footerMadeWithLove: 'Сүйүү жана сапат менен жасалган',
  },

  ru: {
    close: 'Закрыть',
    categoryAll: 'Показать всё меню',
    currencySom: 'сом',

    navHome: 'Главная',
    navMenu: 'Меню',
    navPromos: 'Акции',
    navDelivery: 'Доставка',
    navAbout: 'О нас',
    navContacts: 'Контакты',
    navBookTable: 'Бронь стола',
    navTrackOrder: 'Статус заказа',
    navCart: 'Корзина',
    topDeliveryFree: 'При заказе от 1000 сом доставка БЕСПЛАТНО!',
    topOpenHours: 'Ежедневно 10:00 – 23:00',
    topWorkingToday: 'Мы открыты',
    searchPlaceholder: 'Поиск блюд (роллы, пицца, рамен...)',
    searchResult: 'Результаты поиска:',
    clearSearch: 'Сбросить',

    mobileNavMenu: 'Меню',
    mobileNavPromos: 'Акции',
    mobileNavBooking: 'Бронь стола',
    mobileNavOrders: 'Заказы',

    heroBadge: 'КАФЕ MAEZO & БЫСТРАЯ ДОСТАВКА',
    heroTitle1: 'Вкусы Японии и Азии —',
    heroTitleHighlight: 'настоящее удовольствие',
    heroTitle2: 'и теплая атмосфера.',
    heroSubtitle: 'Свежайшие роллы из охлажденного лосося, рамен на 12-часовом наваристом бульоне и горячая хрустящая пицца из печи. Доставим по Чолпон-Ате за 35 минут!',
    heroOrderBtn: 'Заказать доставку',
    heroMenuBtn: 'Открыть меню',
    heroPromoCardTitle: 'Скидка -50% на второй ролл',
    heroPromoCardSub: 'На все Филадельфии и запеченные темпура',
    heroPromoBadge: 'АКЦИЯ',
    heroStat1Value: '35 мин',
    heroStat1Label: 'Среднее время доставки',
    heroStat2Value: '4.9 ★',
    heroStat2Label: '2000+ отзывов гостей',
    heroStat3Value: '100%',
    heroStat3Label: 'Стандарт Халал',
    heroFeaturesFresh: 'Свежие продукты',
    heroFeaturesHalal: '100% Халал',
    heroFeaturesFast: 'Горячая доставка',

    menuSectionBadge: 'Вкусное и Качественное Меню',
    menuSectionTitle: 'Меню MAEZO',
    menuSectionSub: 'Выберите любимые блюда и добавьте в корзину в один клик.',
    menuFilterAll: 'Все блюда',
    dishNotFoundTitle: 'Блюда не найдены',
    dishNotFoundDesc: 'Попробуйте выбрать другую категорию или изменить поисковый запрос.',

    dishAddToCart: 'В корзину',
    dishAddToCartTotal: 'В корзину',
    dishAddedSuccess: 'Добавлено в корзину!',
    dishInCart: 'В корзине',
    dishDetailsBtn: 'Подробнее',
    dishIngredients: 'Состав:',
    dishComposition: 'Описание и состав',
    dishNutrition: 'Энергетическая ценность:',
    dishCalories: 'ккал',
    dishKcal: 'ккал',
    dishPrepTime: 'Время приготовления:',
    dishWeight: 'Вес:',
    dishPortion: 'Порция',
    dishSpiciness: 'Острота:',
    dishSpicyMild: 'Мягкая',
    dishSpicyMedium: 'Средняя',
    dishSpicyHot: 'Очень острая 🔥',
    dishExtraSauce: 'Дополнительный соус (+30 сом)',
    dishChopsticks: 'Количество палочек:',
    dishQuantity: 'Количество:',
    dishCurrency: 'сом',
    dishHalalTag: 'Халал',
    dishPopularTag: 'ХИТ',
    dishSpicyTag: 'Острое',
    dishNewTag: 'НОВИНКА',
    dishBadgePopular: 'ХИТ',
    dishBadgeHalal: '100% Халал',
    dishBadgeSpicy: 'Острое',
    dishBadgeNew: 'Новинка',
    dishNotesLabel: 'Пожелание для повара (необязательно):',
    dishNotesPlaceholder: 'Например: Без лука, сделать менее острым...',

    cartTitle: 'Ваша Корзина',
    cartEmptyTitle: 'Ваша корзина пуста',
    cartEmptySub: 'Выберите любые аппетитные блюда из нашего меню и добавьте их сюда!',
    cartEmptyBtn: 'Перейти в меню',
    cartClearAll: 'Очистить',
    cartSubtotal: 'Сумма заказа',
    cartDiscount: 'Скидка',
    cartDeliveryFee: 'Доставка',
    cartDeliveryFree: 'Бесплатно',
    cartFreeDeliveryProgress: 'До бесплатной доставки:',
    cartFreeDeliveryUnlocked: 'Поздравляем! Доставка для вас БЕСПЛАТНАЯ 🎉',
    cartPromoPlaceholder: 'Промокод (напр. MAEZO15)',
    cartPromoApply: 'Применить',
    cartPromoApplied: 'Применен',
    cartPromoRemove: 'Удалить',
    cartTotal: 'Итого к оплате',
    cartCheckoutBtn: 'Оформить заказ',
    cartPickupDiscountNote: 'При самовывозе из кафе действует скидка -10%!',

    checkoutTitle: 'Оформление Заказа',
    checkoutSubtitle: 'Заполните данные, и мы немедленно начнем готовить ваш заказ',
    checkoutTypeDelivery: '🚗 Доставка курьером',
    checkoutTypePickup: '🏃 Самовывоз из кафе (-10%)',
    checkoutPickupHint: 'Адрес для самовывоза: г. Чолпон-Ата, ул. Советская 73. Заказ будет готов через 20 минут.',
    checkoutFullName: 'Ваше имя',
    checkoutName: 'Ваше имя',
    checkoutNamePlaceholder: 'Введите ваше имя',
    checkoutNameRequired: 'Введите ваше имя',
    checkoutPhone: 'Номер телефона',
    checkoutPhonePlaceholder: '0708 087 608',
    checkoutPhoneRequired: 'Введите номер телефона',
    checkoutAddress: 'Адрес доставки',
    checkoutAddressRequired: 'Введите адрес доставки',
    checkoutStreet: 'Улица и номер дома',
    checkoutStreetPlaceholder: 'Например: ул. Советская 73',
    checkoutHouse: 'Дом / Корпус',
    checkoutHousePlaceholder: '128 / А',
    checkoutApt: 'Квартира / Офис',
    checkoutFloor: 'Этаж',
    checkoutIntercom: 'Код домофона',
    checkoutComment: 'Комментарий для курьера или кухни',
    checkoutCommentPlaceholder: 'Например: Не звонить в дверь, спит ребенок...',
    checkoutPaymentMethod: 'Способ оплаты',
    checkoutPayCash: 'Наличными курьеру',
    checkoutPayCashDesc: 'Оплата наличными при получении',
    checkoutPayCard: 'Картой курьеру (POS)',
    checkoutPayCardDesc: 'Через терминал картой при получении',
    checkoutPayMbank: 'MBank / Элсом / О!Деньги',
    checkoutPayMbankDesc: 'Перевод через мобильный банкинг',
    checkoutPayQr: 'Оплата по QR-коду',
    checkoutPayQrDesc: 'Национальный QR или банковский QR',
    checkoutOrderSummary: 'Детали заказа',
    checkoutItemsCount: 'позиций',
    checkoutFinalTotal: 'Итого к оплате',
    checkoutSubmitBtn: 'Подтвердить заказ',

    successBadge: 'Успешно!',
    successTitle: 'Ваш заказ принят!',
    successSubtitle: 'Наш оператор свяжется с вами в течение 3 минут для подтверждения.',
    successOrderNumber: 'Номер заказа',
    successEstTime: 'Ориентировочное время',
    successEstDuration: '30-40 минут',
    successWhatsAppBtn: 'Отправить копию в WhatsApp',
    successWhatsAppNote: 'Отправьте детали заказа в кафе через WhatsApp для быстрой обработки',
    successTrackOrderBtn: 'Отслеживать статус',
    successBackToMenu: 'Вернуться на главную',

    bookingTitle: 'Бронирование стола',
    bookingSubtitle: 'Резерв столика в уютном кафе MAEZO',
    bookingName: 'Ваше имя',
    bookingPhone: 'Номер телефона',
    bookingDate: 'Дата',
    bookingTime: 'Время',
    bookingGuests: 'Количество персон',
    bookingPerson: 'чел',
    bookingOccasion: 'Повод / Событие',
    bookingOccasionPlaceholder: 'Например: День рождения, свидание...',
    bookingWishes: 'Особые пожелания',
    bookingWishesPlaceholder: 'Например: Столик у окна, тихий уголок...',
    bookingSubmitBtn: 'Забронировать стол',
    bookingSuccessTitle: 'Стол успешно забронирован!',
    bookingSuccessMsg: 'Спасибо! Мы ждем вас в назначенное время в кафе MAEZO.',
    bookingConfirmedTitle: 'Стол забронирован!',
    bookingConfirmedText: 'Мы свяжемся с вами по номеру',
    bookingConfirmedPost: 'для подтверждения бронирования.',
    bookingClose: 'Закрыть',
    bookingCloseBtn: 'Закрыть',
    bookingInfoNote: 'Бронь бесплатна. Наш менеджер позвонит вам для подтверждения в течение 10 минут.',

    trackerTitle: 'Статус заказов',
    trackerSubtitle: 'Ваши активные и предыдущие заказы',
    trackerEmptyTitle: 'Нет активных заказов',
    trackerEmptySub: 'Выберите блюда из меню и оформите заказ онлайн!',
    trackerInputPlaceholder: 'ID заказа или номер телефона...',
    trackerSearchBtn: 'Найти',
    trackerOrderProgress: 'Этапы выполнения заказа',
    trackerCurrent: 'Текущий этап',
    trackerNotFound: 'Заказ по данному запросу не найден',
    trackerRecentOrders: 'Недавние заказы',
    trackerStatus: 'Статус:',
    trackerStep1: 'Принят',
    trackerStep1Desc: 'Оператор подтвердил заказ',
    trackerStep2: 'Готовится',
    trackerStep2Desc: 'Повара готовят на кухне',
    trackerStep3: 'В пути',
    trackerStep3Desc: 'Курьер выехал по адресу',
    trackerStep4: 'Доставлен',
    trackerStep4Desc: 'Приятного аппетита!',
    trackerNextStepSim: '(Продвинуть статус вперед для теста ➔)',
    trackerHaveQuestions: 'Есть вопросы?',

    promosBadge: 'Специальные Предложения',
    promosTitle: 'Акции и Комбо-наборы',
    promosSubtitle: 'Воспользуйтесь скидками и заказывайте любимые блюда с максимальной выгодой!',
    promosCopyCode: 'Скопировать',
    promosCopied: 'Скопировано!',
    promosApplyCode: 'Применить в корзину',
    promosOrderCategory: 'Открыть категорию',
    promosViewCategory: 'Смотреть меню',
    promoApplied: 'Применен!',
    promoCopy: 'Скопировать',

    deliveryBadge: 'Быстро & Надежно',
    deliveryTitle: 'Условия доставки по Чолпон-Ате',
    deliverySubtitle: 'Мы доставляем все блюда в специальных термосумках горячими и свежими.',
    deliveryFeat1Title: 'Быстрая доставка',
    deliveryFeat1Desc: 'В среднем 30-40 минут по городу Чолпон-Ата.',
    deliveryFeat2Title: 'Термосумки',
    deliveryFeat2Desc: 'Блюда сохраняют тепло и первозданный вкус.',
    deliveryFeat3Title: 'Безопасность & Халал',
    deliveryFeat3Desc: 'Строгий контроль качества и 100% стандарты Халал.',
    deliveryZonesTitle: 'Тарифы и зоны доставки',
    deliveryZone1Title: 'Центр города',
    deliveryZone1Desc: '120 сом (от 1000 сом БЕСПЛАТНО)',
    deliveryZone2Title: 'Южные микрорайоны и жилмассивы',
    deliveryZone2Desc: '150-200 сом (от 1500 сом БЕСПЛАТНО)',
    deliveryPickupTitle: 'Самовывоз из кафе',
    deliveryPickupDesc: 'Скидка -10% на все меню',
    deliveryDispatchPoint: 'Пункт отправки',
    deliveryScheduleNote: 'Служба доставки работает ежедневно с 10:00 до 22:30.',

    aboutBadge: 'Философия Кафе',
    aboutTitle1: 'Мы создаем не просто еду — мы дарим',
    aboutTitleHighlight: 'тепло и уют',
    aboutTitle2: 'каждому гостю.',
    aboutParagraph1: 'MAEZO — это современное и невероятно уютное кафе в самом центре города. Наша цель — подарить подлинный вкус японской и паназиатской кухни с максимальным городским комфортом.',
    aboutParagraph2: 'Бульон для каждого рамена томится более 12 часов, а роллы готовятся исключительно из отборного лосося и икры тобико. У нас можно провести вечер с близкими или заказать вкуснейший ужин домой.',
    aboutStatHalal: 'Халал стандарт',
    aboutStatExperience: 'Лет опыта',
    aboutStatReviews: 'Оценка гостей',
    aboutBannerQuote: '«Лучшие ингредиенты и блюда, приготовленные с любовью»',
    aboutBannerSub: 'Команда кафе MAEZO',
    aboutGuestReviewsTitle: 'Отзывы наших гостей',
    aboutGuestReviewsSub: 'Ваше удовольствие — наша главная награда',

    contactBadge: 'Контакты',
    contactTitle: 'Свяжитесь с нами',
    contactSubtitle: 'Мы всегда рады ответить на любые ваши вопросы и пожелания',
    contactOurAddress: 'Наш адрес',
    contactAddressLandmark: 'г. Чолпон-Ата, ул. Советская 73',
    contactPhone: 'Телефон',
    contactFastCall: 'Позвонить',
    contactSms: 'SMS сообщение',
    contactSendSms: 'Отправить SMS',
    contactWhatsApp: 'WhatsApp',
    contactOnlineChat: 'Написать онлайн',
    contactInstagram: 'Instagram',
    contactInstagramFollow: 'Перейти в профиль',
    contactWorkHoursTitle: 'Часы работы',
    contactWorkHoursDaily: 'Ежедневно: 10:00 — 23:00',
    contactKitchenClose: 'Кухня принимает заказы до 22:30',
    contactFormTitle: 'Оставьте сообщение',
    contactFormSubtitle: 'Мы ответим вам в самое ближайшее время',
    contactFormSuccessTitle: 'Сообщение отправлено!',
    contactFormSuccessDesc: 'Спасибо! Наш менеджер скоро свяжется с вами.',
    contactFormMsgLabel: 'Ваше сообщение',
    contactFormMsgPlaceholder: 'Напишите ваш вопрос или пожелание...',
    contactFormSubmit: 'Отправить сообщение',

    footerDescription: 'MAEZO — современное городское кафе. Авторские роллы из свежей рыбы, наваристый рамен 12-часовой варки и хрустящая пицца из печи.',
    footerLangTitle: 'Выбор языка',
    footerQuickNav: 'Быстрая навигация',
    footerRights: 'Все права защищены.',
    footerMadeWithLove: 'Приготовлено с любовью и заботой',
  },

  en: {
    close: 'Close',
    categoryAll: 'Show Full Menu',
    currencySom: 'som',

    navHome: 'Home',
    navMenu: 'Menu',
    navPromos: 'Deals',
    navDelivery: 'Delivery',
    navAbout: 'About Us',
    navContacts: 'Contacts',
    navBookTable: 'Book Table',
    navTrackOrder: 'Track Order',
    navCart: 'Cart',
    topDeliveryFree: 'FREE delivery on orders over 1000 SOM!',
    topOpenHours: 'Every day 10:00 AM – 11:00 PM',
    topWorkingToday: 'Open Now',
    searchPlaceholder: 'Search dishes (rolls, pizza, ramen...)',
    searchResult: 'Search results:',
    clearSearch: 'Clear',

    mobileNavMenu: 'Menu',
    mobileNavPromos: 'Deals',
    mobileNavBooking: 'Book Table',
    mobileNavOrders: 'Orders',

    heroBadge: 'MAEZO CAFÉ & FAST DELIVERY',
    heroTitle1: 'Flavors of Japan & Asia —',
    heroTitleHighlight: 'pure gastronomic joy',
    heroTitle2: 'and warm hospitality.',
    heroSubtitle: 'Fresh salmon rolls, 12-hour rich broth ramen, and artisanal oven-baked pizza. Delivered straight to your doorstep across Cholpon-Ata in 35 minutes!',
    heroOrderBtn: 'Order Now',
    heroMenuBtn: 'Explore Menu',
    heroPromoCardTitle: '50% OFF Second Roll',
    heroPromoCardSub: 'On all Philadelphia and Tempura rolls',
    heroPromoBadge: 'PROMO',
    heroStat1Value: '35 min',
    heroStat1Label: 'Average Delivery',
    heroStat2Value: '4.9 ★',
    heroStat2Label: '2000+ Guest Reviews',
    heroStat3Value: '100%',
    heroStat3Label: 'Halal Certified',
    heroFeaturesFresh: 'Fresh Ingredients',
    heroFeaturesHalal: '100% Halal',
    heroFeaturesFast: 'Hot Delivery',

    menuSectionBadge: 'Artisanal & Delicious Menu',
    menuSectionTitle: 'MAEZO Menu',
    menuSectionSub: 'Pick your favorites and add them to your cart with one tap.',
    menuFilterAll: 'All Items',
    dishNotFoundTitle: 'No dishes found',
    dishNotFoundDesc: 'Try selecting another category or change your search query.',

    dishAddToCart: 'Add to Cart',
    dishAddToCartTotal: 'Add to Cart',
    dishAddedSuccess: 'Added to Cart!',
    dishInCart: 'In Cart',
    dishDetailsBtn: 'Details',
    dishIngredients: 'Ingredients:',
    dishComposition: 'Description & Ingredients',
    dishNutrition: 'Nutrition facts:',
    dishCalories: 'kcal',
    dishKcal: 'kcal',
    dishPrepTime: 'Prep time:',
    dishWeight: 'Weight:',
    dishPortion: 'Portion',
    dishSpiciness: 'Spiciness:',
    dishSpicyMild: 'Mild',
    dishSpicyMedium: 'Medium',
    dishSpicyHot: 'Very Spicy 🔥',
    dishExtraSauce: 'Extra sauce (+30 som)',
    dishChopsticks: 'Chopsticks quantity:',
    dishQuantity: 'Quantity:',
    dishCurrency: 'som',
    dishHalalTag: 'Halal',
    dishPopularTag: 'HIT',
    dishSpicyTag: 'Spicy',
    dishNewTag: 'NEW',
    dishBadgePopular: 'HIT',
    dishBadgeHalal: '100% Halal',
    dishBadgeSpicy: 'Spicy',
    dishBadgeNew: 'New',
    dishNotesLabel: 'Special note for chef (optional):',
    dishNotesPlaceholder: 'e.g. No onions, make it less spicy...',

    cartTitle: 'Your Cart',
    cartEmptyTitle: 'Your cart is empty',
    cartEmptySub: 'Explore our delicious menu and pick your favorite meals!',
    cartEmptyBtn: 'Browse Menu',
    cartClearAll: 'Clear All',
    cartSubtotal: 'Subtotal',
    cartDiscount: 'Discount',
    cartDeliveryFee: 'Delivery Fee',
    cartDeliveryFree: 'Free',
    cartFreeDeliveryProgress: 'Until Free Delivery:',
    cartFreeDeliveryUnlocked: 'Congratulations! You unlocked FREE Delivery 🎉',
    cartPromoPlaceholder: 'Promo code (e.g. MAEZO15)',
    cartPromoApply: 'Apply',
    cartPromoApplied: 'Applied',
    cartPromoRemove: 'Remove',
    cartTotal: 'Grand Total',
    cartCheckoutBtn: 'Proceed to Checkout',
    cartPickupDiscountNote: 'Get 10% OFF automatically when picking up in person!',

    checkoutTitle: 'Checkout Order',
    checkoutSubtitle: 'Enter your details and our chefs will start cooking right away',
    checkoutTypeDelivery: '🚗 Home Delivery',
    checkoutTypePickup: '🏃 Pick Up at Café (-10%)',
    checkoutPickupHint: 'Pick up address: Cholpon-Ata, 73 Sovetskaya St. Ready in 20 minutes.',
    checkoutFullName: 'Full Name',
    checkoutName: 'Full Name',
    checkoutNamePlaceholder: 'Enter your name',
    checkoutNameRequired: 'Enter your name',
    checkoutPhone: 'Phone Number',
    checkoutPhonePlaceholder: '0708 087 608',
    checkoutPhoneRequired: 'Enter your phone number',
    checkoutAddress: 'Delivery Address',
    checkoutAddressRequired: 'Enter delivery address',
    checkoutStreet: 'Street & House Number',
    checkoutStreetPlaceholder: 'e.g. 73 Sovetskaya Street',
    checkoutHouse: 'Building / Block',
    checkoutHousePlaceholder: '128 / A',
    checkoutApt: 'Apt / Office',
    checkoutFloor: 'Floor',
    checkoutIntercom: 'Intercom code',
    checkoutComment: 'Special instructions for courier or kitchen',
    checkoutCommentPlaceholder: 'e.g. Please do not ring the doorbell, baby is sleeping...',
    checkoutPaymentMethod: 'Payment Method',
    checkoutPayCash: 'Cash upon Delivery',
    checkoutPayCashDesc: 'Pay with cash to courier',
    checkoutPayCard: 'Credit/Debit Card (POS)',
    checkoutPayCardDesc: 'Pay with card via courier terminal',
    checkoutPayMbank: 'MBank / Elsom / O!Dengi',
    checkoutPayMbankDesc: 'Mobile banking direct transfer',
    checkoutPayQr: 'National QR Code',
    checkoutPayQrDesc: 'Scan & pay instantly via QR',
    checkoutOrderSummary: 'Order Summary',
    checkoutItemsCount: 'items',
    checkoutFinalTotal: 'Total to Pay',
    checkoutSubmitBtn: 'Confirm Order',

    successBadge: 'Success!',
    successTitle: 'Your order was placed!',
    successSubtitle: 'Our operator will reach out to you within 3 minutes to confirm.',
    successOrderNumber: 'Order Number',
    successEstTime: 'Estimated Time',
    successEstDuration: '30-40 mins',
    successWhatsAppBtn: 'Send Copy via WhatsApp',
    successWhatsAppNote: 'Send order details directly to the cafe via WhatsApp for instant processing',
    successTrackOrderBtn: 'Track Order Status',
    successBackToMenu: 'Return to Homepage',

    bookingTitle: 'Table Reservation',
    bookingSubtitle: 'Reserve a cozy table at MAEZO café',
    bookingName: 'Your Name',
    bookingPhone: 'Phone Number',
    bookingDate: 'Date',
    bookingTime: 'Time',
    bookingGuests: 'Number of Guests',
    bookingPerson: 'guests',
    bookingOccasion: 'Occasion / Event',
    bookingOccasionPlaceholder: 'e.g. Birthday celebration, date night...',
    bookingWishes: 'Special Requests',
    bookingWishesPlaceholder: 'e.g. Window table, quiet spot...',
    bookingSubmitBtn: 'Confirm Reservation',
    bookingSuccessTitle: 'Table reserved successfully!',
    bookingSuccessMsg: 'Thank you! We look forward to welcoming you at MAEZO.',
    bookingConfirmedTitle: 'Table Reserved!',
    bookingConfirmedText: 'We will contact you via',
    bookingConfirmedPost: 'to confirm your reservation.',
    bookingClose: 'Close',
    bookingCloseBtn: 'Close',
    bookingInfoNote: 'Reservation is free. Our manager will call you within 10 minutes to confirm.',

    trackerTitle: 'Order Tracking',
    trackerSubtitle: 'Live status of your active and past orders',
    trackerEmptyTitle: 'No active orders',
    trackerEmptySub: 'Explore the menu and order delicious food online!',
    trackerInputPlaceholder: 'Order ID or phone number...',
    trackerSearchBtn: 'Find',
    trackerOrderProgress: 'Order Progress Stages',
    trackerCurrent: 'Current Stage',
    trackerNotFound: 'No order found with this query',
    trackerRecentOrders: 'Recent Orders',
    trackerStatus: 'Status:',
    trackerStep1: 'Received',
    trackerStep1Desc: 'Order confirmed by operator',
    trackerStep2: 'Preparing',
    trackerStep2Desc: 'Chef is crafting your meal',
    trackerStep3: 'On the Way',
    trackerStep3Desc: 'Courier is heading to your address',
    trackerStep4: 'Delivered',
    trackerStep4Desc: 'Enjoy your meal!',
    trackerNextStepSim: '(Advance status forward for testing ➔)',
    trackerHaveQuestions: 'Have questions?',

    promosBadge: 'Special Offers',
    promosTitle: 'Deals & Combo Offers',
    promosSubtitle: 'Enjoy exclusive discounts and save on your favorite dishes!',
    promosCopyCode: 'Copy Code',
    promosCopied: 'Copied!',
    promosApplyCode: 'Apply to Cart',
    promosOrderCategory: 'Open Category',
    promosViewCategory: 'View Category',
    promoApplied: 'Applied!',
    promoCopy: 'Copy',

    deliveryBadge: 'Fast & Reliable',
    deliveryTitle: 'Delivery Terms across Cholpon-Ata',
    deliverySubtitle: 'We deliver all food in specialized thermal insulated bags, fresh and hot.',
    deliveryFeat1Title: 'Express Delivery',
    deliveryFeat1Desc: 'Average 30-40 minutes across Cholpon-Ata.',
    deliveryFeat2Title: 'Thermal Bags',
    deliveryFeat2Desc: 'Meals stay hot and taste just as fresh.',
    deliveryFeat3Title: 'Safety & Halal',
    deliveryFeat3Desc: 'Strict quality control and 100% Halal certified.',
    deliveryZonesTitle: 'Delivery Zones & Pricing',
    deliveryZone1Title: 'City Center',
    deliveryZone1Desc: '120 SOM (FREE on orders over 1000 SOM)',
    deliveryZone2Title: 'Southern Microdistricts & Suburbs',
    deliveryZone2Desc: '150-200 SOM (FREE on orders over 1500 SOM)',
    deliveryPickupTitle: 'Pick Up at Café',
    deliveryPickupDesc: 'Get 10% OFF full menu',
    deliveryDispatchPoint: 'Dispatch Point',
    deliveryScheduleNote: 'Delivery service operates daily from 10:00 AM to 10:30 PM.',

    aboutBadge: 'Café Philosophy',
    aboutTitle1: 'We do not just cook food — we deliver',
    aboutTitleHighlight: 'warmth and comfort',
    aboutTitle2: 'to every single guest.',
    aboutParagraph1: 'MAEZO is a modern, cozy café in the heart of Cholpon-Ata. Our goal is to bring the authentic flavors of Japanese and pan-Asian gastronomy combined with seamless urban convenience.',
    aboutParagraph2: 'Every bowl of ramen features broth simmered for 12 hours, and our rolls are crafted only with premium salmon and tobiko caviar. Enjoy an evening with friends or order a delicious feast at home.',
    aboutStatHalal: 'Halal Quality',
    aboutStatExperience: 'Years Experience',
    aboutStatReviews: 'Guest Rating',
    aboutBannerQuote: '«Crafted with premium ingredients and genuine love for food»',
    aboutBannerSub: 'The MAEZO Café Team',
    aboutGuestReviewsTitle: 'What Our Guests Say',
    aboutGuestReviewsSub: 'Your satisfaction is our greatest reward',

    contactBadge: 'Contacts',
    contactTitle: 'Get in Touch with Us',
    contactSubtitle: 'We are always happy to answer your questions and hear your thoughts',
    contactOurAddress: 'Our Address',
    contactAddressLandmark: 'Cholpon-Ata, 73 Sovetskaya Street',
    contactPhone: 'Phone',
    contactFastCall: 'Call Now',
    contactSms: 'SMS Message',
    contactSendSms: 'Send SMS',
    contactWhatsApp: 'WhatsApp',
    contactOnlineChat: 'Chat Online',
    contactInstagram: 'Instagram',
    contactInstagramFollow: 'Open Profile',
    contactWorkHoursTitle: 'Working Hours',
    contactWorkHoursDaily: 'Daily: 10:00 AM – 11:00 PM',
    contactKitchenClose: 'Kitchen takes orders until 10:30 PM',
    contactFormTitle: 'Leave Us a Message',
    contactFormSubtitle: 'We will get back to you as soon as possible',
    contactFormSuccessTitle: 'Message Sent!',
    contactFormSuccessDesc: 'Thank you! Our manager will be in touch shortly.',
    contactFormMsgLabel: 'Your Message',
    contactFormMsgPlaceholder: 'Write your question or request...',
    contactFormSubmit: 'Send Message',

    footerDescription: 'MAEZO is a modern urban café. Signature sushi rolls from fresh fish, 12-hour rich broth ramen, and crisp pizza from the stone oven.',
    footerLangTitle: 'Select Language',
    footerQuickNav: 'Quick Navigation',
    footerRights: 'All rights reserved.',
    footerMadeWithLove: 'Crafted with passion and care',
  },
};
