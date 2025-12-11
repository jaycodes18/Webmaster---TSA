// JavaScript source code
// Coppell Community Resource Hub - Main JS
// TODO: maybe add animations to cards later?

// Resource data - ALL LINKS FIXED
const resources = [
    {
        name: 'Coppell Farmers Market',
        category: 'community',
        description: 'Weekly farmers market operating every Saturday from 8am to noon at Old Town Coppell on Main Street. Vendors sell fresh produce, grass-fed meats, organic vegetables, artisan breads, local honey, and specialty food items. The market also features occasional food trucks and live music during peak season. It tends to get crowded between 9-10am, so arriving early is recommended for the best selection.',
        address: '768 W Main St, Coppell, TX 75019',
        phone: '(972) 304-7043',
        website: 'https://coppellfarmersmarket.org',
        fullDetails: 'Established in 2003, the Coppell Farmers Market has become a staple community gathering place. The market operates year-round regardless of weather conditions. Regular vendors include local farms, specialty food producers, and craft artisans. Parking is available in the surrounding Old Town area.',
        featured: true,
        rating: 4.8
    },
    {
        name: 'The CORE (Coppell Recreation Center)',
        category: 'health',
        description: 'Comprehensive recreation facility located in Andrew Brown Park offering both indoor and outdoor amenities. The indoor section includes a fitness center with cardio and weight equipment, plus an indoor lap pool. Outside there\'s an aquatic park with multiple water slides, a lazy river, and splash pad areas. Group fitness classes like yoga, spin, and aerobics are offered throughout the week, and day passes are available for non-members.',
        address: 'Andrew Brown Park, Coppell, TX 75019',
        phone: '(972) 304-3200',
        website: 'https://www.coppelltx.gov/440/The-CORE',
        fullDetails: 'The CORE stands for Coppell Outdoor Recreation and Events. Facilities also include basketball courts, racquetball courts, and an indoor walking track. The outdoor aquatic area is open seasonally during summer months. Memberships are available for individuals and families, with discounted rates for Coppell residents.',
        featured: true,
        rating: 4.9
    },
    {
        name: 'Cozby Library and Community Commons',
        category: 'education',
        description: 'Modern public library offering more than just traditional book lending services. Features include computer labs with up-to-date technology, private study rooms available for reservation, and a maker space equipped with 3D printers. The library hosts regular programs such as children\'s story time, teen book clubs, and technology workshops for adults. High-speed WiFi and numerous electrical outlets are available throughout the building for student use.',
        address: '177 N Heartz Rd, Coppell, TX 75019',
        phone: '(972) 304-3658',
        website: 'https://www.coppelltx.gov/1183/Cozby-Library-Community-Commons',
        fullDetails: 'The library was renovated recently to include contemporary amenities and collaborative spaces. Beyond books, patrons can check out video games, board games, mobile hotspots, and even tools from their Library of Things collection. Study rooms fill up quickly during exam periods, so advance reservation is recommended.',
        featured: true,
        rating: 4.7
    },
    {
        name: 'Coppell Arts Center',
        category: 'arts',
        description: 'Premier venue for visual and performing arts located on Travis Street. Hosts theater productions, art gallery exhibitions, and offers classes in painting, pottery, dance, and music for all age groups. The center features multiple studio spaces and a black box theater used for community performances. Registration for classes typically opens at the beginning of each semester.',
        address: '505 Travis St, Coppell, TX 75019',
        phone: '(972) 304-7047',
        website: 'https://www.coppellartscenter.org/',
        fullDetails: 'The Coppell Arts Center serves as the cultural heart of the community, providing a vibrant venue for visual and performing arts. Classes are available for beginners through advanced students. The gallery space rotates exhibits featuring local and regional artists. Performance tickets can be purchased online or at the box office.',
        featured: false,
        rating: 4.6
    },
    {
        name: 'Biodiversity Education Center',
        category: 'education',
        description: 'Environmental education facility situated within Coppell Nature Park on South Coppell Road. Provides hands-on nature programs, wildlife exhibits, and guided trail experiences for school groups and families. The center offers EcoExplorer summer camps and regular educational workshops focused on local ecosystems. Hiking trails around the facility range from easy to moderate difficulty levels.',
        address: '711 S Coppell Rd, Coppell, TX 75019',
        phone: '(972) 304-3574',
        website: 'https://www.coppelltx.gov/401/Biodiversity-Education-Center',
        fullDetails: 'The Biodiversity Education Center at Coppell Nature Park provides immersive environmental education experiences. Programs focus on native Texas wildlife, habitat conservation, and outdoor skills. The facility includes indoor classroom space and outdoor learning areas. Field trip bookings are available for schools and youth groups.',
        featured: false,
        rating: 4.5
    },
    {
        name: 'Coppell Volunteers Program',
        category: 'community',
        description: 'Citywide volunteer program connecting teens and adults with service opportunities at various Coppell facilities. Volunteers can serve at locations including the library, Biodiversity Center, Life Safety Park, Senior Center, and special events. The program coordinates volunteers for community activities and seasonal programs throughout the year. Service hours are documented and can be used for school requirements or scholarship applications.',
        address: '255 Parkway Blvd, Coppell, TX 75019',
        phone: '(972) 304-3618',
        website: 'https://www.coppelltx.gov/810/Coppell-Volunteers',
        fullDetails: 'Coppell Volunteers is a comprehensive citywide program that connects residents with meaningful service opportunities. Volunteer positions vary from administrative help to hands-on program assistance. Online registration and orientation sessions are required before beginning service. The program tracks hours and provides verification letters when needed.',
        featured: false,
        rating: 4.7
    },
    {
        name: 'Life Safety Park - Fire Department Programs',
        category: 'emergency',
        description: 'Public safety education facility operated by Coppell Fire Department on West Bethel Road. Provides CPR and AED certification courses, first aid training, and fire safety education for community members. Services include free car seat inspections and installation assistance for families with young children. Classes are scheduled regularly and require advance registration through the city website.',
        address: '901 W Bethel Rd, Coppell, TX 75019',
        phone: '(972) 304-3500',
        website: 'https://www.coppelltx.gov/182/Life-Safety-Park',
        fullDetails: 'Life Safety Park and the Coppell Fire Department offer extensive public safety education and training programs for all ages. CPR classes are offered monthly with evening and weekend options. Car seat checks are available by appointment at all fire stations. The facility also hosts field trips for school groups learning about fire safety.',
        featured: false,
        rating: 4.9
    },
    {
        name: 'Coppell Senior and Community Center',
        category: 'community',
        description: 'Active center serving adults aged 50 and older with various wellness and social programs. Offers fitness classes, educational workshops, health screenings, and organized day trips to local attractions. The facility includes activity rooms, a full kitchen, and outdoor patio space for events. Special programs and holiday celebrations are scheduled throughout the year for members.',
        address: '350 Parkway Blvd, Coppell, TX 75019',
        phone: '(972) 304-7870',
        website: 'https://www.coppelltx.gov/412/Senior-Community-Center-at-Grapevine-Spr',
        fullDetails: 'The Coppell Senior and Community Center provides a vibrant hub for active adults aged 50 and older. Programming includes exercise classes, card games, art workshops, and technology training. Day trips to museums, theaters, and restaurants are organized monthly. Membership is required to participate in most activities and events.',
        featured: false,
        rating: 4.8
    },
    {
        name: 'Andrew Brown Park',
        category: 'community',
        description: 'Coppell\'s largest park spanning 124 acres with diverse recreational amenities for all ages. Features include a scenic lake, multiple playgrounds, splash pad, walking trails, picnic pavilions, and sports fields. The park hosts The CORE recreation center and provides ample parking throughout the grounds. Popular for family gatherings, athletic activities, and community events year-round.',
        address: '1550 W Belt Line Rd, Coppell, TX 75019',
        phone: '(972) 462-0022',
        website: 'https://www.coppelltx.gov/facilities/facility/details/Andrew-Brown-Park-East-5',
        fullDetails: 'Andrew Brown Park is Coppell\'s premier park destination, spanning 124 acres of beautifully landscaped grounds. The park includes fishing areas around the lake, sand volleyball courts, and covered pavilions that can be reserved. Trail options include paved paths suitable for strollers and wheelchairs. Restroom facilities and water fountains are located throughout the park.',
        featured: false,
        rating: 4.9
    },
    {
        name: 'Coppell Family YMCA',
        category: 'health',
        description: 'Community fitness and wellness facility offering gym access, group classes, and youth programs for all ages. Amenities include cardio and weight training equipment, indoor pool, basketball courts, and racquetball courts. The Y provides childcare services during workout hours and runs summer camps and after-school programs for kids. Membership options include individual, family, and financial assistance programs based on income.',
        address: '146 Town Center Blvd, Coppell, TX 75019',
        phone: '(972) 393-5121',
        website: 'https://www.ymcadallas.org/locations/coppell',
        fullDetails: 'Unlike some gyms, the YMCA focuses on community programming beyond just fitness equipment. They offer swim lessons, youth sports leagues, and wellness programs for seniors. Group fitness classes include options like Zumba, cycling, and water aerobics. Day passes are available for non-members who want to try out the facility.',
        featured: false,
        rating: 4.6
    },
    {
        name: 'Assistance League of Coppell',
        category: 'social-services',
        description: 'Volunteer-driven nonprofit organization providing direct support to students, families, and seniors in the Coppell community. Programs include clothing donations, school supply assistance, mentoring initiatives, and senior outreach services. The organization works closely with local schools and civic groups to meet essential community needs. Volunteers are always welcome to join and help with various philanthropic programs throughout the year.',
        address: 'PO Box 2462, Coppell, TX 75019',
        phone: '(972) 672-2540',
        website: 'https://www.assistanceleague.org/coppell',
        fullDetails: 'Assistance League of Coppell focuses on strengthening community wellbeing through hands-on volunteer service. Their signature program provides new school clothing and supplies to students in need. Senior programs offer companionship and practical support. All funding comes from member dues, fundraising events, and community donations.',
        featured: false,
        rating: 4.8
    },
    {
        name: 'Coppell Independent School District (CISD)',
        category: 'education',
        description: 'Highly rated public school district providing academic instruction and comprehensive student support programs for the Coppell community. The district offers specialized learning pathways, diverse extracurricular opportunities, counseling services, and partnerships with local organizations. CISD schools consistently rank among the top performers in the state for academic achievement. District programs emphasize both college readiness and career preparation for all students.',
        address: '200 S Denton Tap Rd, Coppell, TX 75019',
        phone: '(214) 496-6000',
        website: 'https://www.coppellisd.com',
        fullDetails: 'Coppell ISD serves approximately 12,000 students across multiple elementary, middle, and high school campuses. The district provides gifted and talented programs, special education services, and English language learning support. Advanced Placement and dual credit courses are available at the high school level. Strong parent involvement and community partnerships support student success.',
        featured: false,
        rating: 4.8
    },
    {
        name: 'Theatre Coppell',
        category: 'arts',
        description: 'Long-standing performing arts organization offering community theatre productions, acting workshops, and seasonal performances for residents of all ages. Productions range from classic plays to contemporary musicals and are performed at the Coppell Arts Center. The organization provides opportunities for youth and adults to participate both onstage and behind the scenes. Auditions are open to community members regardless of prior theatre experience.',
        address: '505 Travis St, Coppell, TX 75019',
        phone: '(972) 745-7719',
        website: 'https://www.theatrecoppell.com',
        fullDetails: 'Theatre Coppell has been producing quality community theatre since 1983. The organization typically stages 4-5 productions per year including drama, comedy, and musical theatre. Educational programs include acting classes, technical theatre workshops, and summer camps for young performers. Volunteer opportunities are available in areas like set construction, costumes, and front-of-house management.',
        featured: false,
        rating: 4.9
    },
    {
        name: 'Coppell Police Department',
        category: 'emergency',
        description: 'The Coppell Police Department is committed to maintaining safety and building trust within the community. Officers provide essential services such as patrol, emergency response, and community outreach programs. The department works to create a secure environment where residents feel protected and informed. Various programs are available including Citizens Police Academy, neighborhood watch coordination, and youth engagement initiatives.',
        address: '230 Veterans Way, Coppell, TX 75019',
        phone: '(972) 304-3620',
        website: 'https://www.coppelltx.gov/1184/Police-Department',
        fullDetails: 'Coppell Police Department focuses on proactive community policing and building strong relationships with residents. The department offers crime prevention programs, safety education, and 24/7 emergency response. Officers participate in community events and school programs to foster positive relationships. The department maintains active communication through social media and community meetings to keep residents informed.',
        featured: false,
        rating: 4.7
    }
];

// State variables
let currentSlide = 0;
let currentFilter = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// helper functions for category stuff
function getCategoryName(cat) {
    const names = {
        'social-services': 'Social Services',
        'health': 'Health',
        'education': 'Education',
        'arts': 'Arts',
        'community': 'Community',
        'emergency': 'Emergency'
    };
    return names[cat] || cat;
}

function getCategoryIcon(cat) {
    const icons = {
        'community': 'fa-users',
        'health': 'fa-heartbeat',
        'education': 'fa-book',
        'arts': 'fa-palette',
        'emergency': 'fa-ambulance',
        'social-services': 'fa-hands-helping'
    };
    return icons[cat] || 'fa-info-circle';
}

function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="fas fa-star" style="opacity: 0.3;"></i>';
        }
    }
    return stars;
}

// Render featured resources - uses fullDetails
function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featured = resources.filter(r => r.featured);
    grid.innerHTML = featured.map(r => `
        <div class="featured-card-special">
            <div class="featured-badge-special"><i class="fas fa-star"></i> FEATURED</div>
            <div class="featured-card-header">
                <div class="featured-icon"><i class="fas ${getCategoryIcon(r.category)}"></i></div>
                <h3>${r.name}</h3>
                <p>${getCategoryName(r.category)}</p>
            </div>
            <div class="featured-card-body">
                <p class="featured-description">${r.fullDetails}</p>
                <div class="featured-details">
                    <div class="featured-detail-item"><i class="fas fa-map-marker-alt"></i><span>${r.address}</span></div>
                    <div class="featured-detail-item"><i class="fas fa-phone"></i><span>${r.phone}</span></div>
                </div>
                <a href="${r.website}" target="_blank" rel="noopener noreferrer" class="featured-learn-more">
                    <i class="fas fa-external-link-alt"></i> Visit Website
                </a>
            </div>
        </div>
    `).join('');
}

// search and filter functions
function applyFilters() {
    searchQuery = document.getElementById('searchInput').value.toLowerCase();
    renderResources();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchQuery = '';
    renderResources();
}

// main function to display all resources
function renderResources() {
    const grid = document.getElementById('resourceGrid');
    if (!grid) return;

    let filtered = resources;

    // category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(r => r.category === currentFilter);
    }

    // search filter
    if (searchQuery) {
        filtered = filtered.filter(r =>
            r.name.toLowerCase().includes(searchQuery) ||
            r.description.toLowerCase().includes(searchQuery) ||
            r.fullDetails.toLowerCase().includes(searchQuery)
        );
    }

    // no results message
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
                <i class="fas fa-search" style="font-size: 4rem; color: #d1d5db; margin-bottom: 1rem;"></i>
                <h3 style="font-size: 1.5rem; color: #111827; margin-bottom: 0.5rem;">No resources found</h3>
                <p style="color: #6b7280;">Try adjusting your search or filter criteria</p>
                <button onclick="clearSearch(); filterCategory('all', event.target.closest('.filter-buttons').querySelector('[data-category=all]'))" 
                style="margin-top: 1rem; padding: 0.75rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer;">
                    Reset Filters
                </button>
            </div>
        `;
        return;
    }


    
    // build cards HTML with info hint
    grid.innerHTML = filtered.map((r, i) => {
        const resourceIndex = resources.indexOf(r);
        const isFavorited = favorites.includes(r.name);
        return `
        <div class="resource-card ${r.category}">
            <div class="rating-display">
                ${getStarRating(r.rating)}
                <span style="margin-left: 0.5rem; color: #6b7280;">(${r.rating})</span>
            </div>
           
            <div class="card-header">
                <h3>${r.name}</h3>
                <span class="category-badge ${r.category}">${getCategoryName(r.category)}</span>
            </div>
           
            <div class="card-body">
                <p class="card-description">${r.description}</p>
                <p class="info-hint">For more information, click the <i class="fas fa-info-circle"></i> icon below</p>
               
                <div class="card-actions">
                    <button class="action-btn favorite-btn ${isFavorited ? 'favorited' : ''}" 
                    onclick="toggleFavorite('${r.name.replace(/'/g, "\\'")}', this)" title="Save to favorites">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-btn share-btn" 
                    onclick="shareResource('${r.name.replace(/'/g, "\\'")}', this)" title="Share">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <button class="action-btn details-btn" 
                    onclick="openResourceModal('${r.name.replace(/'/g, "\\'")}', this)" title="View Details">
                        <i class="fas fa-info-circle"></i>
                    </button>
                </div>
               
                <div class="card-details" id="details-${resourceIndex}">
                    <div class="detail-description">${r.fullDetails}</div>
                    <div class="contact-section">
                        <h4><i class="fas fa-address-book"></i> Contact Information</h4>
                        <div class="detail-item"><i class="fas fa-map-marker-alt"></i><span>${r.address}</span></div>
                        <div class="detail-item"><i class="fas fa-phone"></i><a href="tel:${r.phone.replace(/\D/g, '')}">${r.phone}</a></div>
                        <div class="detail-item"><i class="fas fa-globe"></i><a href="${r.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// favorites handling
function toggleFavorite(resourceName, btn) {
    const index = favorites.indexOf(resourceName);
    if (index > -1) {
        favorites.splice(index, 1);
        btn.classList.remove('favorited');
    } else {
        favorites.push(resourceName);
        btn.classList.add('favorited');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount();
}

// share function
function shareResource(resourceName, btn) {
    const resource = resources.find(r => r.name === resourceName);
    if (!resource) return;

    const text = `Check out ${resource.name} in the Coppell Community Resource Hub! ${resource.description}`;

    if (navigator.share) {
        navigator.share({
            title: resource.name,
            text: text,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert(text + '\n\nShare this with your community!');
    }
}

// modal with resource details
function openResourceModal(resourceName, btn) {
    const resource = resources.find(r => r.name === resourceName);
    if (!resource) return;

    const modal = document.getElementById('modal');
    const modalHeader = modal.querySelector('.modal-header h3');
    const modalBody = modal.querySelector('.modal-body');

    modalHeader.textContent = resource.name;
    modalBody.innerHTML = `
        <div class="form-group">
            <p style="color: #6b7280; margin: 0; font-size: 0.9rem;">${getCategoryName(resource.category)}</p>
        </div>
       
        <div class="form-group">
            <h4 style="color: #111827; margin-bottom: 0.5rem;">Description</h4>
            <p>${resource.description}</p>
        </div>

        <div class="form-group">
            <h4 style="color: #111827; margin-bottom: 0.5rem;">Details</h4>
            <p>${resource.fullDetails}</p>
        </div>

        <div class="form-group">
            <label><strong>📍 Address:</strong></label>
            <p>${resource.address}</p>
        </div>

        <div class="form-group">
            <label><strong>📞 Phone:</strong></label>
            <p><a href="tel:${resource.phone.replace(/\D/g, '')}">${resource.phone}</a></p>
        </div>

        <div class="form-group">
            <label><strong>🌐 Website:</strong></label>
            <p><a href="${resource.website}" target="_blank" rel="noopener noreferrer">${resource.website}</a></p>
        </div>

        <div class="form-group">
            <label><strong>⭐ Rating:</strong></label>
            <div style="text-align: center; margin-top: 0.5rem;">
                ${getStarRating(resource.rating)}
                <p style="margin-top: 0.5rem; color: #6b7280;">${resource.rating} out of 5</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// category filter button
function filterCategory(cat, btn) {
    currentFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderResources();
}

// slider functions
function goToSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');

    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    goToSlide(currentSlide);
}

// modal functions
function openModal() {
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function submitForm() {
    alert('Thank you! Your resource submission has been received and will be reviewed by our team.');
    closeModal();
}

// setup slider dots click handlers
function setupSliderNav() {
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            goToSlide(currentSlide);
        });
    });
}

// close modal when clicking outside
function setupModalListeners() {
    const modal = document.getElementById('modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// update favorites counter in nav
function updateFavCount() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favCount = document.getElementById('favCount');
    if (favCount) {
        favCount.textContent = favorites.length;
    }
}

// initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    setupSliderNav();
    setupModalListeners();
    renderFeatured();
    renderResources();
    updateFavCount();

    // auto-advance slider every 11 seconds
    setInterval(nextSlide, 11000);

    // set first filter button as active
    const firstFilterBtn = document.querySelector('.filter-btn');
    if (firstFilterBtn) {
        firstFilterBtn.classList.add('active');
    }
});
