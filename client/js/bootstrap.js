import $ from 'jquery';
import * as foundation from 'foundation';

export function bootstrap() {
    $(document).foundation();

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
}
