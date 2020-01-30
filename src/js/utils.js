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

export const onTransitionEnd = (element, callback) => {
  const duration = getTransitionDuration(element);
  setTimeout(() => {
    callback(element, duration);
  }, duration);
};

export const addClass = (ref, className) => {
  ref.current.classList.add(className);
};

export const removeClass = (ref, className) => {
  ref.current.classList.remove(className);
};

export const hasClass = (ref, className) => {
  return ref.current.classList.contains(className);
};

export const setDisplay = (ref, show = true, prop = 'block') => {
  ref.current.style.display = !show ? 'none' : prop;
};

export const setOpacity = (ref, number) => {
  ref.current.style.opacity = number ? number : '';
};

export const setVisibility = (ref, show = true) => {
  ref.current.style.visibility = !show ? 'hidden' : 'visible';
};
