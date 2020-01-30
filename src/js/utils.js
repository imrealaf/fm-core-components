export const getTransitionDuration = element => {
  const style = window.getComputedStyle(element);
  if (!style) {
    return;
  }
  const duration = parseFloat(
    style.getPropertyValue('transition-duration').replace('s', '')
  );
  const delay = style.getPropertyValue('transition-delay')
    ? parseFloat(style.getPropertyValue('transition-delay').replace('s', ''))
    : 0;
  const val = duration + delay;
  return val * 1000;
};

export const onTransitionEnd = (ref, callback) => {
  if (!ref) return;
  const duration = getTransitionDuration(ref.current);
  setTimeout(() => {
    callback();
  }, duration);
};

export const addClass = (ref, className) => {
  if (!ref) return;
  ref.current.classList.add(className);
};

export const removeClass = (ref, className) => {
  if (!ref) return;
  ref.current.classList.remove(className);
};

export const hasClass = (ref, className) => {
  if (!ref) return;
  return ref.current.classList.contains(className);
};

export const setDisplay = (ref, show = true, prop = 'block') => {
  if (!ref) return;
  ref.current.style.display = !show ? 'none' : prop;
};

export const setOpacity = (ref, number) => {
  if (!ref) return;
  ref.current.style.opacity = number ? number : '';
};

export const setVisibility = (ref, show = true) => {
  if (!ref) return;
  ref.current.style.visibility = !show ? 'hidden' : 'visible';
};

export const defer = (callback, time = 50) => {
  if (!callback) return;
  setTimeout(callback, time);
};
