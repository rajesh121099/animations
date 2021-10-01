import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from "@angular/animations";


export let bounceOutLeftAimation = animation(
    animate('0.5s ease-out',keyframes([  
        style({offset: .2,
        opacity:1,
        transform:'translate(20px)'
        }),
        style({offset: 1,
            opacity:0,
            transform:'translate(-100%)'
            }),
    ]))
)

export let slide = trigger('slide',[
    transition(':enter', [
        style({ transform: 'translateX(-10px)'}),
        animate(500)
    ]),

    transition(':leave',
        useAnimation(bounceOutLeftAimation)
    )
  ]);
    // transition(':leave',[
        // animate('0.5s cubic-bezier(1,.27,.09,.63)',
        // style({ transform: 'translateX(-100%)'}))
    // ])

export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{duration}} {{easing}}')
],{
    params:{
        duration:'2s',
        easing:'ease-out'
    }
});



export let fade=trigger('fade',[
  
    transition(':enter',
    useAnimation(fadeInAnimation)
    ),
    transition(':leave',[ 
        animate(2000,style({ opacity: 0 }))
      ])
]);