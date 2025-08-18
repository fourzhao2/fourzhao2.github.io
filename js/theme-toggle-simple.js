// 简化版主题切换功能 - 已禁用
// 用户不需要主题切换功能，仅保留暗色模式

/*
document.addEventListener('DOMContentLoaded', function() {
    console.log('主题切换脚本加载中...');
    
    // 创建主题切换按钮 - 已禁用
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.innerHTML = '☀️';
    button.title = '切换亮色/暗色主题';
    button.style.cssText = `
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 9999 !important;
        background: linear-gradient(45deg, #0f3460, #533483) !important;
        color: white !important;
        border: none !important;
        border-radius: 50% !important;
        width: 50px !important;
        height: 50px !important;
        font-size: 20px !important;
        cursor: pointer !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    `;
    
    // 添加到页面
    document.body.appendChild(button);
    
    console.log('主题切换按钮已添加');
    
    // 获取当前主题
    function getCurrentTheme() {
        return localStorage.getItem('blog-theme') || 'dark';
    }
    
    // 设置主题
    function setTheme(theme) {
        const body = document.body;
        
        if (theme === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            button.innerHTML = '🌙';
            button.style.background = 'linear-gradient(45deg, #3b82f6, #6366f1) !important';
            localStorage.setItem('blog-theme', 'light');
            console.log('切换到亮色主题');
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            button.innerHTML = '☀️';
            button.style.background = 'linear-gradient(45deg, #0f3460, #533483) !important';
            localStorage.setItem('blog-theme', 'dark');
            console.log('切换到暗色主题');
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
    
    // 设置初始主题
    setTheme(getCurrentTheme());
    
    // 绑定点击事件
    button.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('主题切换按钮被点击');
        toggleTheme();
    });
    
    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    console.log('主题切换功能初始化完成');
});
*/

// 强制设置暗色主题
document.addEventListener('DOMContentLoaded', function() {
    console.log('强制使用暗色主题');
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('blog-theme', 'dark');
});
