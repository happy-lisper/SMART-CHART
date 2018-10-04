(set-env!
 :dependencies [
                '[adzerk/boot-cljs          "0.0-2814-3"]
                '[adzerk/boot-cljs-repl     "0.1.9"]
                ;'[adzerk/boot-reload        "0.2.6"]
                '[tailrecursion/boot-hoplon "0.1.0-SNAPSHOT"]
                '[tailrecursion/hoplon      "6.0.0-alpha1"]
                '[pandeiro/boot-http        "0.6.2"]
                ]
  :source-paths   #{"src"}
  :resource-paths #{"assets"}
)

(require
  '[adzerk.boot-cljs          :refer [cljs]]
  ;'[adzerk.boot-reload        :refer [reload]]
  '[adzerk.boot-cljs-repl     :refer [cljs-repl start-repl]]
  '[tailrecursion.boot-hoplon :refer [hoplon prerender]]
  '[pandeiro.boot-http        :refer [serve]])

(deftask dev
  "Build project for local development."
  []
  (comp
    (serve)
    (watch)
    ;(speak)
    (hoplon)
    ;(reload)
    (cljs-repl)
    (cljs)))

(deftask prod
  "Build project for production deployment."
  []
  (comp
    (hoplon)
    ;;TODO optimizations seems to break JS code (cljs :optimizations :advanced)
    (cljs)
    (prerender)))

