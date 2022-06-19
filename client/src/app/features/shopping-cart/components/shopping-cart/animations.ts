import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideOver = trigger('slideOver', [
  state(
    'closed',
    style({
      transform: 'translateX(100%)',
      display: 'none',
    })
  ),
  state(
    'open',
    style({
      transform: 'translateX(0%)',
    })
  ),
  transition('closed => open', [style({ display: 'block' }), animate('500ms ease-in-out')]),
  transition('open => closed', animate('500ms ease-in-out')),
]);

export const backgroundOverlay = trigger('backgroundOverlay', [
  state(
    'closed',
    style({
      opacity: 0,
      display: 'none',
    })
  ),
  state(
    'open',
    style({
      opacity: 1,
    })
  ),
  transition('closed => open', [
    style({ opacity: 0, display: 'block' }),
    animate('300ms 500ms ease-in-out'),
  ]),
  transition('open => closed', animate('300ms ease-in-out')),
]);
