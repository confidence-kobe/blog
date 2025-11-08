// 主题切换功能
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// 移动端导航菜单切换
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// 热门内容数据
const popularContentData = [
    {
        id: 1,
        title: '藏族历史概览',
        category: '历史文化',
        description: '了解藏族从古至今的历史发展脉络，探寻雪域高原的文明起源。',
        icon: '🏛️',
        link: 'pages/knowledge/history.html'
    },
    {
        id: 2,
        title: '唐卡艺术赏析',
        category: '艺术文化',
        description: '深入了解唐卡的绘制技艺、题材分类和艺术价值。',
        icon: '🎨',
        link: 'pages/knowledge/art.html'
    },
    {
        id: 3,
        title: '藏语入门教程',
        category: '语言学习',
        description: '从零开始学习藏语，掌握基础发音、词汇和日常用语。',
        icon: '🔤',
        link: 'pages/resources/language.html'
    },
    {
        id: 4,
        title: '藏传佛教文化',
        category: '宗教信仰',
        description: '认识藏传佛教的历史、教派、仪式和哲学思想。',
        icon: '🙏',
        link: 'pages/knowledge/religion.html'
    },
    {
        id: 5,
        title: '西藏地理与风情',
        category: '地理风情',
        description: '领略青藏高原的壮丽景色和独特的民俗风情。',
        icon: '🏔️',
        link: 'pages/knowledge/geography.html'
    },
    {
        id: 6,
        title: '《格萨尔王传》导读',
        category: '文学典籍',
        description: '探索世界最长史诗的魅力，了解格萨尔王的英雄传奇。',
        icon: '📖',
        link: 'pages/knowledge/literature.html'
    }
];

// 加载热门内容
function loadPopularContent() {
    const container = document.getElementById('popularContent');
    if (!container) return;

    const html = popularContentData.map(item => `
        <div class="content-card">
            <div class="content-card-image">${item.icon}</div>
            <div class="content-card-body">
                <h3>${item.title}</h3>
                <div class="content-card-meta">${item.category}</div>
                <p>${item.description}</p>
                <a href="${item.link}" class="content-card-link">了解更多 →</a>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    loadPopularContent();
    initSmoothScroll();
});

// 导出功能供其他页面使用
window.TibetanPlatform = {
    initTheme,
    initMobileNav,
    initSmoothScroll
};
