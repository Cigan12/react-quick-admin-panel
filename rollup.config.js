import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

// const packageJson = require('./package.json');

export default {
    input: 'src/index.tsx',
    output: [
        {
            dir: './lib/cjs',
            format: 'cjs',
            sourcemap: true,
        },
        {
            dir: './lib/esm',
            format: 'esm',
            sourcemap: true,
        },
    ],
    preserveModules: true,
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
            useTsconfigDeclarationDir: true,
        }),
        postcss(),
    ],
};
