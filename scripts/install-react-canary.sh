cp package.json package.json.orig
cp pnpm-lock.yaml pnpm-lock.yaml.orig

# Install the canary version of React
pnpm i react@18.3.0-canary-c3048aab4-20240326 react-dom@18.3.0-canary-c3048aab4-20240326 -w

# Restore the original package.json and pnpm-lock.yaml
mv package.json.orig package.json
mv pnpm-lock.yaml.orig pnpm-lock.yaml