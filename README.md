# dynamic-hero-icons

## Nedir ? 

heroicons.com adresinde bulunan iconları daha rahat kullanabilmek için geliştirilen oldukça basit bir Vue componentidir.  

## Kullanmadan Önce 

Bu componenti kullanabilmeniz için gerekli olan npm paketini yükleyin. 

```sh
npm install @heroicons/vue
```

## Nasıl Kullanılır ? 

Herhangi bir yüklemek yapmak yerine kullanmak istediğiniz projenize HeroIcons.vue dosyasını kopyalayın ve kendi projenize yapıştırın.

```
├───public
│     favicon.ico
│     index.html
└───src
    │ App.vue
    │ main.js
    ├───assets
    │ logo.png
    └───components
      HelloWorld.vue
      HeroIcons.vue
```

Ardından main.js dosyanıza import ederek her yerde kullanabilir hale getirin. 

```js
import { createApp } from 'vue'
import App from './App.vue'
import HeroIcon from '@/components/HeroIcons.vue'

createApp(App)
    .component('HeroIcon',HeroIcon)
    .mount('#app')
```

Proje içinde farklı componentlerde kullanabilmek için ise aşağıdaki örneklerden faydalanabilirsiniz. 

```js
<HeroIcon name="AdjustmentIcon" :className="h-5 w-5 bg-red-300" />

<HeroIcon name="ArrowNarrowUpIcon" :className="h-6 w-6 bg-blue-300"  />

<HeroIcon name="BeakerIcon" :className="h-3 w-3 bg-yellow-200 hover:bg-yellow-400" type="outline"  />

```

| Props | Explain | Default | 
| -------------  |------------- | ------------- |
|  name  | Icon ismini temsil eder. |  |
|  className  | Iconun sahip olacağı class'ı temsil eder. | 32px'lik yükseklik ve genişlik değerine sahip default bir class bulunmaktadır. |
|  type  | outline ya da solid değerlerini ifade eder. | outline |

##

Bir problemle karşılaşırsanız bana yazabilirsiniz. 

[me@kayafirat.com](mailto:me@kayafirat.com?subject=[GitHub]%vue-dynamic-hero-icons)



