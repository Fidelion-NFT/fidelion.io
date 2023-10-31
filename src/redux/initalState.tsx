export const initLanguege = navigator.language;

const transitionLanguege = () => {
    switch (initLanguege) {
        case 'en':
        case 'en-US':
        case 'en-us':
            return 'EN';
        case 'ko':
        case 'ko-KR':
        case 'ko-kr':
            return 'KR';
        case 'ja':
        case 'ja-JP':
        case 'ja-jp':
            return 'JP';
        
        default:
            return 'EN';
    }
} 

export const languege = transitionLanguege();