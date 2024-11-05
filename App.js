document.addEventListener('DOMContentLoaded', () => {
    // تأثير ظهور تدريجي للأقسام
    const sections = document.querySelectorAll('section');
    
    const fadeInOnScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

    // تأثيرات تفاعلية للأيقونات
    const icons = document.querySelectorAll('.section-icon i');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(360deg) scale(1.2)';
            icon.style.transition = 'all 0.5s ease';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });

    // تأثير نبض للصورة الشخصية
    const profileImage = document.querySelector('.profile-image');
    setInterval(() => {
        profileImage.style.transform = 'scale(1.05)';
        setTimeout(() => {
            profileImage.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
});
