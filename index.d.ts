import * as L from 'leaflet';

declare module 'leaflet' {
    namespace L {
        export class _TileLayerWithHeaders extends TileLayer {
            constructor(
                baseUrl: string,
                options: WMSOptions,
                header: { header: string; value: string }[]
            );
        }

        export function TileLayerWithHeaders(
            baseUrl: string,
            options: WMSOptions,
            header: { header: string; value: string }[]
        ): L._TileLayerWithHeaders;
    }

    namespace TileLayer {
        export class WMSHeader extends WMS {
            constructor(
                baseUrl: string,
                options: WMSOptions,
                header: { header: string; value: string }[]
            );
        }

        export function wmsHeader(
            baseUrl: string,
            options: WMSOptions,
            header: { header: string; value: string }[]
        ): WMSHeader;
    }
}
