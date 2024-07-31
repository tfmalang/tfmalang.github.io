import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Links from './views/Links.vue'
import NotFound from './views/NotFound.vue'

const generateTags = (name, content) => {
    return {
        name: name,
        content: content,
    }
}

const defaultTags = () => {
    const tags = []
    tags.push(
        generateTags(
            'keywords',
            'FDTM, TfM, Transport for Malang, Forum Diskusi Transportasi Malang',
        )
    )

    tags.push(
        generateTags(
            'author',
            'FDTM-TfM',
        )
    )

    return tags
}

const homeTags = defaultTags()
homeTags.push(
    generateTags(
        'description',
        'Forum Diskusi Transportasi Malang (FDTM) adalah wadah diskusi dan kajian transportasi di Kota Malang. FDTM berdiri pada 2024.'
    )
)

const router = createRouter({
    mode: 'hash',
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'FDTM',
        component: Home,
        meta: {
            title: 'Beranda ~ FDTM - Forum Diskusi Transportasi Malang',
            metaTags: homeTags
        }
    }, {
        path: '/about',
        name: 'Tentang',
        component: About,
        meta: {
            title: 'Tentang FDTM - Forum Diskusi Transportasi Malang',
            metaTags: homeTags
        }
    }, {
        path: '/links',
        name: 'Link Cepat',
        component: Links,
        meta: {
            title: 'FDTM - TfM | Link cepat',
            metaTags: homeTags
        }
    }, /* {
        path: '/informations/:information',
        name: 'FDTM Redirect',
        component: information,
        meta: {
            title: 'Redirect link - FDTM',
            metaTags: homeTags
        }
    }, */ {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound,
        meta: {
            title: 'Page not found',
            metaTags: homeTags
        }
    }]
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  
    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    } else if(previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title
    }
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
  
    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next()
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta')
        
        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key])
        })
      
        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '')
        return tag
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))
  
    next()
})

export default router
