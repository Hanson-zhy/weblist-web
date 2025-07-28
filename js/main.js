// 全局功能
document.addEventListener('DOMContentLoaded', () => {
    // 初始化主题
    function initTheme() {
        const isNightMode = localStorage.getItem('nightMode') === 'true';
        document.body.classList.toggle('night-mode', isNightMode);
        themeIcon.classList.toggle('fa-moon', !isNightMode);
        themeIcon.classList.toggle('fa-sun', isNightMode);
    }
    
    // 切换主题
    function toggleTheme() {
        const isNightMode = document.body.classList.toggle('night-mode');
        localStorage.setItem('nightMode', isNightMode);
        
        // 更新图标
        themeIcon.classList.toggle('fa-moon', !isNightMode);
        themeIcon.classList.toggle('fa-sun', isNightMode);
        
        // 显示模式切换提示
        modeText.textContent = isNightMode ? '夜间' : '日间';
        modeIndicator.style.display = 'block';
        setTimeout(() => {
            modeIndicator.style.display = 'none';
        }, 2000);
    }
    
    // DOM 元素
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const modeIndicator = document.getElementById('modeIndicator');
    const modeText = document.getElementById('modeText');
    
    // 添加主题切换事件
    themeToggle.addEventListener('click', toggleTheme);
    
    // 初始化主题
    initTheme();
});