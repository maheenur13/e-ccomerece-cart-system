import { useEffect, useRef } from 'react';
import Icon, { close } from '../../../libs/icons';
import './style.scss';

export const DrawerSidebar = (props) => {
  const { isActive, onHide, children, header, footer, closeButton, ...rest } = props;
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  const BackdropOpened = () => {
    const backdrop = document.createElement('div');
    backdrop.id = 'DrawerSidebarBackdrop';
    backdrop.className = 'modal-backdrop show';
    if (!closeButton) backdrop.addEventListener('click', onHide);
    document.body.appendChild(backdrop);
    document.querySelector('body').classList.add('modal-open');
  };

  const BackdropClosed = () => {
    document.querySelector('body').classList.remove('modal-open');
    document?.querySelector('#DrawerSidebarBackdrop')?.remove();
  };

  useEffect(() => {
    if (isActive) {
      BackdropOpened();
    } else {
      BackdropClosed();
    }

    return () => BackdropClosed();
  }, [isActive]);

  useEffect(() => {
    const headerHeight = headerRef?.current?.offsetHeight ?? 0;
    const footerHeight = footerRef?.current?.offsetHeight ?? 0;
    const omitHeight = headerHeight + footerHeight;

    if (contentRef?.current) contentRef.current.style.height = `calc(100% - ${omitHeight}px)`;
  }, [header, children, footer]);

  return (
    <div
      className="sidebar_wrapper"
      style={{ right: isActive ? 0 : '-405px' }}
      {...rest}
      onClick={() => {
        if (!closeButton) onHide();
      }}>
      {closeButton && (
        <div className="CloseBtn" role="button" onClick={onHide}>
          <Icon path={close} fill="#C4C4C4" height={24} width={24} />
        </div>
      )}
      {header && (
        <div className="sidebar_header" ref={headerRef}>
          {header}
        </div>
      )}
      <div className="sidebar_content" ref={contentRef}>
        {children}
      </div>
      {footer && (
        <div className="sidebar_footer" ref={footerRef}>
          {footer}
        </div>
      )}
    </div>
  );
};
