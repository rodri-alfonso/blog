## Checklist

- [x] Simplificar el header (quitar leng y theme switcher)
- [x] Esconder el footer
- [ ] Crear el article layout
- [ ] Crear tipografias
- [ ] Mejorar el Banner
- [ ] Mejorar el Layout Page
- [ ] Mejorar SEO

Internacionalizacion

Tener un contexto con el lang por defecto.
Tener un archivo donde esten todas las traducciones, que este archivo alimente al contexto

Internationalization manual
localStorage -> hook -> componentes
Poner en el localStorage, un lang por defecto y modificar que en cada Link o Push, se pushee con el lang que tenga el store agregado.

agregar al next.config:
i18n: {
locales: ['en', 'es'],
defaultLocale: 'en',
localeDetection: true,
},
