// 主题切换功能
(function() {
    'use strict';
    
    // 创建主题切换按钮
    function createThemeToggleButton() {
        const button = document.createElement('button');
        button.className = 'theme-toggle';
        button.innerHTML = '☀️';
        button.title = '切换主题';
        button.setAttribute('aria-label', '切换亮色/暗色主题');
        
        // 添加到页面
        document.body.appendChild(button);
        
        return button;
    }
    
    // 获取当前主题
    function getCurrentTheme() {
        return localStorage.getItem('blog-theme') || 'dark';
    }
    
    // 设置主题
    function setTheme(theme) {
        const body = document.body;
        const button = document.querySelector('.theme-toggle');
        
        if (theme === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            if (button) button.innerHTML = '🌙';
            localStorage.setItem('blog-theme', 'light');
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            if (button) button.innerHTML = '☀️';
            localStorage.setItem('blog-theme', 'dark');
        }
    }
    
    // 切换主题
    function toggleTheme() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        
        // 添加切换动画
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    // 初始化
    function init() {
        // 创建按钮
        const button = createThemeToggleButton();
        
        // 设置初始主题
        setTheme(getCurrentTheme());
        
        // 绑定点击事件
        button.addEventListener('click', toggleTheme);
        
        // 键盘快捷键 (Ctrl + Shift + T)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                toggleTheme();
            }
        });
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
