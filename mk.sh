# * ------------- COMPONENT

# create ts/tsx component in src/components

mkdir src/components/$1
touch src/components/$1/$1.tsx
touch src/components/$1/index.ts

# create starter functional component tsx to YourComponent.tsx

echo "import React from 'react';

type Props = {};

const ${1}: React.FC<Props> = (props) => {
  return <div className="${1}" >${1}</div>;
};

export default ${1}; " >  src/components/$1/$1.tsx

# create default export to folders index.ts

echo "import ${1} from './${1}';

export default { ${1} }" >  src/components/$1/index.ts


# * ------------- STYLES

# create sass folder structure

mkdir src/sass/components/$1
touch src/sass/components/$1/_$1.scss
touch src/sass/components/$1/index.scss

# add import to sass folder index

echo "@import './${1}.scss" > src/sass/components/$1/index.scss


# create import index in sass/YourComponent to styles.scss

echo "@import './components/${1}/index.scss';" >> src/sass/styles.scss