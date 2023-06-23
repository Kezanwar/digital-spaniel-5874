# * ------------- COMPONENT

# create ts/tsx component in src/components

mkdir src/components/$1
touch src/components/$1/$1.tsx
touch src/components/$1/index.ts
touch src/components/$1/$1.module.scss

# create starter functional component tsx to YourComponent.tsx

echo "import React from 'react';

type Props = {};

const ${1}: React.FC<Props> = (props) => {
  return <div className='${1}' >${1}</div>;
};

export default ${1}; " >  src/components/$1/$1.tsx

# create default export to folders index.ts

echo "import ${1} from './${1}';

export { ${1} }" >  src/components/$1/index.ts

# add .YourComponent {} to sass file

echo ".${1} {}" > src/components/$1.module.scss

# add import to sass folder index

echo "@import '@app/components/${1}/$1.module.scss';" >> src/sass/components/components.scss
