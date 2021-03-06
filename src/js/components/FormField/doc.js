import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export const doc = FormField => {
  const DocumentedFormField = describe(FormField)
    .availableAt(getAvailableAtBadge('FormField'))
    .description(
      `A single field in a form. FormField wraps an input component with
      a label, help, and/or error messaging. It typically contains an input
      control like TextInput, TextArea, Select, etc.`,
    )
    .usage(
      `import { FormField } from 'grommet';
<FormField />`,
    );

  DocumentedFormField.propTypes = {
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).description(
      'Any error text describing issues with the field',
    ),
    help: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).description(
      'Any help text describing how the field works',
    ),
    htmlFor: PropTypes.string.description(
      'The id of the input element contained in this field',
    ),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).description(
      'A short label describing the field',
    ),
  };

  return DocumentedFormField;
};
