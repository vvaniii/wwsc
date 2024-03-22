import http from "@/utils/http"

export function getBannerAPI() {

    return http.get('home/banner')

}

export function getNewAPI() {

    return http.get('home/new')

}

export function getHotAPI() {

    return http.get('home/hot')

}