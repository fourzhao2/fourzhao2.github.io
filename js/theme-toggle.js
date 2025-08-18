// 主题切换功能 - 暂时禁用亮色模式
(function() {
    'use strict';
    
    // 创建主题切换按钮 - 暂时隐藏
    function createThemeToggleButton() {
        // 暂时不创建切换按钮，因为只有暗色模式
        // 后续重新启用亮色模式时，取消下面的注释并注释掉return null
        /*
        const button = document.createElement('button');
        button.className = 'theme-toggle';
        button.innerHTML = '☀️';
        button.title = '切换主题';
        button.setAttribute('aria-label', '切换亮色/暗色主题');
        
        // 添加到页面
        document.body.appendChild(button);
        
        return button;
        */
        
        return null; // 暂时不创建按钮
    }
    
    // 获取当前主题 - 强制暗色模式
    function getCurrentTheme() {
        // 暂时强制返回暗色模式，忽略用户之前的选择
        return 'dark';
    }
    
    // 设置主题 - 强制暗色模式
    function setTheme(theme) {
        const body = document.body;
        const button = document.querySelector('.theme-toggle');
        
        // 暂时只支持暗色模式
        // 原始代码注释如下：
        /*
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
        */
        
        // 强制使用暗色模式
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.setItem('blog-theme', 'dark');
    }
    
    // 切换主题 - 暂时禁用
    function toggleTheme() {
        // 暂时禁用主题切换，只使用暗色模式
        // 原始代码注释如下：
        /*
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        
        // 添加切换动画
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
        */
        
        // 什么都不做，保持暗色模式
        console.log('主题切换已禁用，当前仅支持暗色模式');
    }
    
    // 初始化
    function init() {
        // 创建按钮 - 暂时不创建
        const button = createThemeToggleButton();
        
        // 设置初始主题 - 强制暗色模式
        setTheme('dark');
        
        // 暂时不绑定事件，因为没有按钮
        /*
        // 绑定点击事件
        if (button) {
            button.addEventListener('click', toggleTheme);
        }
        
        // 键盘快捷键 (Ctrl + Shift + T)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                toggleTheme();
            }
        });
        */
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
