// بيانات الأخبار (يمكنك تعديلها أو إضافة المزيد)
const newsData = {
    politics: [
        {
            title: "اجتماع طارئ لمجلس الوزراء لمناقشة التطورات",
            summary: "عقد مجلس الوزراء اجتماعا طارئا اليوم لمناقشة آخر التطورات المحلية والدولية.",
            image: "https://via.placeholder.com/400x200?text=Politics",
            date: "2025-04-01"
        },
        {
            title: "البرلمان يناقش قانون الانتخابات الجديد",
            summary: "بدأ البرلمان جلساته لمناقشة مشروع قانون الانتخابات المقدم من اللجنة القانونية.",
            image: "https://via.placeholder.com/400x200?text=Election",
            date: "2025-04-02"
        },
        {
            title: "تصريحات هامة لوزير الخارجية حول العلاقات الإقليمية",
            summary: "أكد وزير الخارجية على أهمية تعزيز التعاون مع دول الجوار.",
            image: "https://via.placeholder.com/400x200?text=Foreign",
            date: "2025-04-03"
        }
    ],
    society: [
        {
            title: "حملة توعوية لمكافحة المخدرات في المدارس",
            summary: "أطلقت وزارة التربية حملة توعوية شاملة لطلاب المدارس.",
            image: "https://via.placeholder.com/400x200?text=Society",
            date: "2025-04-01"
        },
        {
            title: "افتتاح مركز صحي جديد في الأحياء السكنية",
            summary: "تم افتتاح مركز صحي نموذجي يقدم خدماته لأهالي الحي.",
            image: "https://via.placeholder.com/400x200?text=Health",
            date: "2025-04-02"
        }
    ],
    economy: [
        {
            title: "ارتفاع أسعار النفط يؤثر على الأسواق المحلية",
            summary: "شهدت الأسواق المحلية ارتفاعا في الأسعار بسبب تقلبات أسعار النفط.",
            image: "https://via.placeholder.com/400x200?text=Economy",
            date: "2025-04-01"
        },
        {
            title: "إطلاق مبادرة لدعم المشاريع الصغيرة",
            summary: "أعلنت الحكومة عن مبادرة جديدة لتقديم قروض ميسرة للشباب.",
            image: "https://via.placeholder.com/400x200?text=SME",
            date: "2025-04-03"
        }
    ],
    literature: [
        {
            title: "صدور رواية جديدة للكاتب المعروف",
            summary: "صدرت حديثا رواية جديدة تناقش قضايا اجتماعية معاصرة.",
            image: "https://via.placeholder.com/400x200?text=Book",
            date: "2025-04-01"
        },
        {
            title: "معرض الكتاب الدولي يستقبل آلاف الزوار",
            summary: "توافد الآلاف من عشاق القراءة على معرض الكتاب في يومه الأول.",
            image: "https://via.placeholder.com/400x200?text=BookFair",
            date: "2025-04-02"
        }
    ],
    sports: [
        {
            title: "فوز ثمين للمنتخب الوطني في التصفيات",
            summary: "حقق المنتخب الوطني فوزا مستحقا على نظيره بهدفين نظيفين.",
            image: "https://via.placeholder.com/400x200?text=Football",
            date: "2025-04-01"
        },
        {
            title: "دوري كرة القدم يدخل مراحله الحاسمة",
            summary: "اشتدت المنافسة بين الأندية على لقب الدوري هذا الموسم.",
            image: "https://via.placeholder.com/400x200?text=League",
            date: "2025-04-03"
        }
    ],
    tech: [
        {
            title: "مؤتمر تقني عالمي يناقش الذكاء الاصطناعي",
            summary: "اختتمت فعاليات مؤتمر تقني عالمي ناقش تطبيقات الذكاء الاصطناعي.",
            image: "https://via.placeholder.com/400x200?text=AI",
            date: "2025-04-01"
        },
        {
            title: "إطلاق تطبيق محلي جديد لخدمات التوصيل",
            summary: "أطلقت شركة ناشئة تطبيقا جديدا ينافس في سوق خدمات التوصيل.",
            image: "https://via.placeholder.com/400x200?text=App",
            date: "2025-04-02"
        }
    ],
    health: [
        {
            title: "اكتشاف علاج جديد لمرض السكري",
            summary: "أعلن باحثون عن نتائج مبشرة لتجارب دواء جديد.",
            image: "https://via.placeholder.com/400x200?text=Diabetes",
            date: "2025-04-01"
        },
        {
            title: "حملة تطعيم واسعة ضد الأمراض الموسمية",
            summary: "أطلقت وزارة الصحة حملة تطعيم وطنية تشمل جميع المحافظات.",
            image: "https://via.placeholder.com/400x200?text=Vaccine",
            date: "2025-04-02"
        }
    ],
    misc: [
        {
            title: "ظاهرة فلكية نادرة تشاهد الليلة",
            summary: "تشهد سماء المنطقة الليلة ظاهرة فلكية نادرة يمكن مشاهدتها بالعين المجردة.",
            image: "https://via.placeholder.com/400x200?text=Astronomy",
            date: "2025-04-01"
        },
        {
            title: "مهرجان فنون شعبية في المدينة القديمة",
            summary: "انطلقت فعاليات مهرجان الفنون الشعبية بمشاركة فرق من دول عديدة.",
            image: "https://via.placeholder.com/400x200?text=Festival",
            date: "2025-04-03"
        }
    ]
};

// دالة لإنشاء بطاقة خبر
function createNewsCard(article) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}" loading="lazy">
        <div class="card-body">
            <h4><a href="#">${article.title}</a></h4>
            <p>${article.summary}</p>
            <div class="meta">
                <span>📅 ${article.date}</span>
                <span>⏱️ 5 دقائق قراءة</span>
            </div>
        </div>
    `;
    return card;
}

// تعبئة الأقسام بالأخبار
document.addEventListener('DOMContentLoaded', function() {
    // تعبئة كل قسم حسب الفئة
    document.querySelectorAll('.news-grid').forEach(grid => {
        const category = grid.dataset.category;
        if (category && newsData[category]) {
            newsData[category].forEach(article => {
                grid.appendChild(createNewsCard(article));
            });
        }
    });

    // تفعيل قائمة الجوال
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });

    // زر العودة للأعلى
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // إضافة استماع للنقر على روابط التنقل لإغلاق القائمة في الجوال
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
        });
    });
});
