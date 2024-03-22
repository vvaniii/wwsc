import http from "@/utils/http"

export function getBannerAPI() {

    return http.get('home/banner')

}