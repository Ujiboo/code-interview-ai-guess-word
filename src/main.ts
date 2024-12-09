import './style.css';
import { setupCounter } from './counter.ts';
import html from './index.html?raw';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
