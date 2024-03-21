<<<<<<< HEAD
import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
=======
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';
>>>>>>> 4de9498 (stylelint)

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
<<<<<<< HEAD
    }
}

=======
        hot: true,
    };
}
>>>>>>> 4de9498 (stylelint)
