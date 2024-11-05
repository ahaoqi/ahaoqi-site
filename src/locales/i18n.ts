import { createI18n } from 'vue-i18n';
// @ts-ignore
import en from '../locales/en.json';
// @ts-ignore
import zh from '../locales/zh.json';

const messages = {
    en: en,
    zh: zh,
};

// 获取用户之前选择的语言，默认为 'en'
const savedLanguage = localStorage.getItem('preferredLanguage') as 'en' | 'zh' || 'en';

const i18n = createI18n({
    legacy: false,
    locale: savedLanguage, // 使用存储的语言作为默认语言
    fallbackLocale: 'en',
    messages,
});

export default i18n;
