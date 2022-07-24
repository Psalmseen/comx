import './tooltip.styles.css';
export default ({
  isToolTipShown,
  children,
}: {
  isToolTipShown: boolean;
  children: any;
}) => (
  <div className="tooltip__wrapper">
    {isToolTipShown ? (
      <div className="tooltip__content">
        <span className="tooltip__arrow"></span>
        <h1 className="tip__title">Hi, I'm Adanna</h1>
        <p className="tip__text">How may I help you?</p>
      </div>
    ) : (
      ''
    )}
    {children}
  </div>
);
