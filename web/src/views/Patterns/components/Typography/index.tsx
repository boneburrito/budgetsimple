import { PatternsSection, Pattern } from 'views/Patterns/components/Shared';

const TypographyPatterns = () => {
  return (
    <PatternsSection title="Typography">
      <Pattern cssClass="<span>"><span>Regular text</span></Pattern>
      <Pattern cssClass="<strong>"><strong>Bold text</strong></Pattern>
      <Pattern cssClass=".-copy"><p className="-copy">Paragraph text</p></Pattern>
      <Pattern cssClass=".-muted"><p className="-muted">Muted text</p></Pattern>
      <Pattern cssClass="a.-link"><a className="-link" href="/">Link</a></Pattern>
      <Pattern cssClass=".-code"><span className="-code">Code</span></Pattern>
      <Pattern cssClass=".-t-h1"><h1 className="-t-h1">Heading 1</h1></Pattern>
      <Pattern cssClass=".-t-h2"><h2 className="-t-h2">Heading 2</h2></Pattern>
      <Pattern cssClass=".-t-h3"><h3 className="-t-h3">Heading 3</h3></Pattern>
      <Pattern cssClass=".-t-h4"><h4 className="-t-h4">Heading 4</h4></Pattern>
    </PatternsSection>
  );
};

export default TypographyPatterns;
