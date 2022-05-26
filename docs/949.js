"use strict";(self.webpackChunkangular_movies=self.webpackChunkangular_movies||[]).push([[949],{7949:(K,u,o)=>{o.r(u),o.d(u,{MoviesModule:()=>$});var _=o(4049),d=o(6696),h=o(4332),s=o(5698),e=o(5e3),l=o(7093),C=o(9224),c=o(3322),f=o(7423),v=o(1125),m=o(9808),x=o(6705),b=o(3892);function y(n,a){if(1&n&&(e.TgZ(0,"div")(1,"button",12),e._uU(2),e.qZA()()),2&n){const i=a.$implicit;e.xp6(2),e.hij(" ",i.name," ")}}function O(n,a){if(1&n&&(e.TgZ(0,"span",13),e._UZ(1,"app-poster-card",14),e.qZA()),2&n){const i=a.$implicit;e.xp6(1),e.Q6J("model",i)("isMovie",!0)}}let P=(()=>{class n{constructor(i){this.moviesService=i,this.nowPlaying=[]}ngOnInit(){this.getNowPlayinMovies(1),this.moviesService.getGenres().subscribe(i=>{this.genres=i.genres})}getNowPlayinMovies(i){this.moviesService.getNowPlaying(i).pipe((0,s.q)(1)).subscribe(t=>{this.totalResults=t.total_results,this.nowPlaying=t.results},()=>{})}changePage(i){this.getNowPlayinMovies(i.pageIndex+1)}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(h.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-movies"]],decls:22,vars:4,consts:[[1,"container","movies-list"],["fxLayout","row"],["fxFlex","25%","fxShow","","fxHide.sm","true","fxHide.xs","true",1,"filter-movies-card"],[2,"margin-bottom","24px"],["mat-raised-button","","color","primary","aria-label","Set Now Playing filter","disabled",""],["mat-raised-button","","color","primary","aria-label","Set Upcoming filter","disabled",""],["mat-raised-button","","color","primary","aria-label","Set Popular filter","disabled",""],[4,"ngFor","ngForOf"],["fxFlex","75%","fxFlex.sm","100","fxFlex.xs","100"],["fxLayout","row wrap"],["fxFlex","25%","fxFlex.md","25%","fxFlex.xs","50%","style","padding: 5px 5px;",4,"ngFor","ngForOf"],[3,"length","pageSize","page"],["mat-raised-button","","color","primary","aria-label","Set Genres filter","disabled",""],["fxFlex","25%","fxFlex.md","25%","fxFlex.xs","50%",2,"padding","5px 5px"],[3,"model","isMovie"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"All Movies #NowPlaying"),e.qZA(),e.TgZ(3,"div",1)(4,"mat-card",2)(5,"div",3),e._uU(6,"Filter by"),e.qZA(),e.TgZ(7,"button",4),e._uU(8,"Now Playing"),e.qZA(),e.TgZ(9,"button",5),e._uU(10,"Upcoming"),e.qZA(),e.TgZ(11,"button",6),e._uU(12,"Popular"),e.qZA(),e.TgZ(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),e._uU(16," Genres "),e.qZA()(),e.YNc(17,y,3,1,"div",7),e.qZA()(),e.TgZ(18,"div",8)(19,"div",9),e.YNc(20,O,2,2,"span",10),e.qZA(),e.TgZ(21,"mat-paginator",11),e.NdJ("page",function(p){return t.changePage(p)}),e.qZA()()()()),2&i&&(e.xp6(17),e.Q6J("ngForOf",t.genres),e.xp6(3),e.Q6J("ngForOf",t.nowPlaying),e.xp6(1),e.Q6J("length",t.totalResults)("pageSize",20))},directives:[l.xw,C.a8,l.yH,c.b8,f.lW,v.ib,v.yz,v.yK,m.sg,x.h,b.NW],styles:[".movies-list[_ngcontent-%COMP%]{margin-top:6rem}.filter-movies-card[_ngcontent-%COMP%]{height:100%;margin-right:8px}.filter-movies-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}@media screen and (max-width: 599px){.movies-list[_ngcontent-%COMP%]{margin-top:2rem}.movies-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}}@media screen and (min-width: 600px) and (max-width: 959px){.movies-list[_ngcontent-%COMP%]{margin-top:2rem}.movies-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}}"]}),n})();var w=o(8528),Z=o(2313),g=o(8966),T=o(6228),F=o(5113),A=o(5899),D=o(1495),U=o(5245),M=o(3737);const S=["closeModal"],L=["openModal"],Q=["matTrailerDialog"];function N(n,a){1&n&&e._UZ(0,"mat-progress-bar",19)}function Y(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){return e.CHM(i),e.oxw().openDialog()}),e.TgZ(1,"mat-icon"),e._uU(2,"play_arrow"),e.qZA(),e._uU(3," Play Trailer "),e.qZA()}}function J(n,a){if(1&n&&(e.TgZ(0,"button",21),e._uU(1),e.qZA()),2&n){const i=a.$implicit;e.xp6(1),e.Oqu(i.name)}}function H(n,a){if(1&n&&(e.TgZ(0,"div",24),e._UZ(1,"app-poster-card",25),e.qZA()),2&n){const i=a.$implicit;e.xp6(1),e.Q6J("model",i)("isMovie",!0)}}function q(n,a){if(1&n&&(e.TgZ(0,"div",22),e.YNc(1,H,2,2,"div",23),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",i.recomendedMovieList)}}function R(n,a){1&n&&(e.TgZ(0,"div",26)(1,"mat-icon",27),e._uU(2,"sentiment_dissatisfied"),e.qZA(),e.TgZ(3,"span"),e._uU(4,"No recommended movies"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("inline",!0))}function I(n,a){if(1&n&&(e.TgZ(0,"div",35),e._UZ(1,"iframe",36),e.qZA()),2&n){const i=e.oxw(2);e.xp6(1),e.Q6J("src",i.video.url,e.uOi)}}function z(n,a){if(1&n){const i=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"a",30),e.NdJ("click",function(){return e.CHM(i),e.oxw().trailerDialog.closeAll()}),e.TgZ(3,"mat-icon",31),e._uU(4,"close"),e.qZA()(),e.TgZ(5,"h2",32),e._uU(6,"Play Trailer"),e.qZA()(),e.TgZ(7,"mat-dialog-content",33),e.YNc(8,I,2,1,"div",34),e.qZA()()}if(2&n){const i=e.oxw();e.xp6(8),e.Q6J("ngIf",i.video)}}const G=function(n){return{"padding-top-60":n}},B=[{path:"",children:[{path:"",component:P},{path:"detail/:url",component:(()=>{class n{constructor(i,t,r,p,j,k,E,V){this._moviesService=i,this.route=t,this.sanitizer=r,this.dialog=p,this.seo=j,this.trailerDialog=k,this.movie=new w.Y,this.recomendedMovieList=[],this.cast=[],this.isLoading=!0,this.mobileQuery=V.matchMedia("(max-width: 599px)"),this._mobileQueryListener=()=>E.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){this.route.params.subscribe(i=>{const t=i.url;this.getMovie(t),this.getMovieCredits(t),this.getMovieVideo(t),this.getRecomendedMovie(t)})}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener)}getMovie(i){this.isLoading=!0,this._moviesService.getMovie(i).pipe((0,s.q)(1)).subscribe(t=>{this.movie=t,this.generateSeo()},()=>{},()=>this.isLoading=!1)}getMovieCredits(i){this._moviesService.getMovieCredits(i).pipe((0,s.q)(1)).subscribe(t=>{t.cast=t.cast.filter(r=>r.profile_path),this.cast=t.cast.slice(0,5)},()=>{})}getMovieVideo(i){this._moviesService.getMovieVideos(i).pipe((0,s.q)(1)).subscribe(t=>{var r;(null===(r=null==t?void 0:t.results)||void 0===r?void 0:r.length)>0?(this.video=t.results[0],this.video.url=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.video.key)):this.video=null},()=>{})}getRecomendedMovie(i){this._moviesService.getRecomendMovies(i).pipe((0,s.q)(1)).subscribe(t=>{this.recomendedMovieList=t.results.slice(0,12)},()=>{})}generateSeo(){this.seo.generateTags({title:`${this.movie.title}`,description:`${this.movie.overview}`,image:`https://image.tmdb.org/t/p/w780/${this.movie.backdrop_path}`,slug:"movie"})}openDialog(){this.trailerDialog.open(this.matTrailerDialog,{}).disableClose=!1}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(h.I),e.Y36(d.gz),e.Y36(Z.H7),e.Y36(g.uw),e.Y36(T.v),e.Y36(g.uw),e.Y36(e.sBO),e.Y36(F.vx))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-movie-detail"]],viewQuery:function(i,t){if(1&i&&(e.Gf(S,5),e.Gf(L,5),e.Gf(Q,5)),2&i){let r;e.iGM(r=e.CRH())&&(t.closeModal=r.first),e.iGM(r=e.CRH())&&(t.openModal=r.first),e.iGM(r=e.CRH())&&(t.matTrailerDialog=r.first)}},decls:32,vars:20,consts:[["mode","indeterminate",4,"ngIf"],[1,"movie-main-container",3,"ngClass"],[1,"movie-main-data-container","container"],["fxLayout","row",1,"movie-top-section"],[1,"movie-main-img"],["data-loaded","true","appImgMissingDirective","",3,"src","srcset","alt"],[1,"movie-main-info"],["fxFlex","100",1,"title-subtitle-container"],[1,"movie-main-title"],["fxHide.xs","true"],["fxShow","","fxHide.sm","true","fxHide.xs","true"],[2,"padding-right","8px"],["mat-raised-button","","color","primary","aria-label","Trailer","class","play-trailer",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","aria-label","Genres","disabled","","style","margin-right: 5px",4,"ngFor","ngForOf"],[1,"container"],[1,"similar-movies","default-margin-bottom"],["fxLayout","row wrap",4,"ngIf","ngIfElse"],["noRecomendedMovies",""],["matTrailerDialog",""],["mode","indeterminate"],["mat-raised-button","","color","primary","aria-label","Trailer",1,"play-trailer",3,"click"],["mat-raised-button","","color","primary","aria-label","Genres","disabled","",2,"margin-right","5px"],["fxLayout","row wrap"],["fxFlex","16.6%","fxFlex.sm","25","fxFlex.md","25%","fxFlex.xs","50%","style","padding: 5px 5px;",4,"ngFor","ngForOf"],["fxFlex","16.6%","fxFlex.sm","25","fxFlex.md","25%","fxFlex.xs","50%",2,"padding","5px 5px"],[3,"model","isMovie"],["fxLayout","row wrap","fxLayoutAlign","center center",2,"padding","5rem 0"],[2,"font-size","5rem",3,"inline"],["cdkDragBoundary",".cdk-overlay-container","cdkDrag","","cdkDragRootElement",".cdk-overlay-pane",2,"background","black"],["cdkDragHandle","",1,"dialog-title-container"],["href","javascript:void(0);",3,"click"],["aria-label","cerrar dialogo cambiar imagen Cabecera"],["matDialogTitle",""],[1,"header-content-dialog"],["class","video-movie-main",4,"ngIf"],[1,"video-movie-main"],["allowfullscreen","",2,"background-color","#000","border","0",3,"src"]],template:function(i,t){if(1&i&&(e.YNc(0,N,1,0,"mat-progress-bar",0),e.TgZ(1,"div",1)(2,"div",2)(3,"section",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"h2",8),e._uU(9),e.qZA(),e.TgZ(10,"h3",9),e._uU(11),e.qZA()(),e.TgZ(12,"section")(13,"div",10)(14,"h3"),e._uU(15,"Overview"),e.qZA(),e.TgZ(16,"p",11),e._uU(17),e.qZA()(),e.YNc(18,Y,4,0,"button",12),e.TgZ(19,"div",10)(20,"h3"),e._uU(21,"Categories"),e.qZA(),e.YNc(22,J,2,1,"button",13),e.qZA()()()()()(),e.TgZ(23,"div",14)(24,"div",15)(25,"h2"),e._uU(26,"Recommended Movies"),e.qZA(),e.YNc(27,q,2,1,"div",16),e.YNc(28,R,5,1,"ng-template",null,17,e.W1O),e.qZA()(),e.YNc(30,z,9,1,"ng-template",null,18,e.W1O)),2&i){const r=e.MAs(29);e.Q6J("ngIf",t.isLoading),e.xp6(1),e.Udp("background-image","linear-gradient(rgba(52,41,49,0.80), rgba(0,0,0,0.85)), url(https://image.tmdb.org/t/p/w1280"+t.movie.backdrop_path+")"),e.Q6J("ngClass",e.VKq(18,G,!t.mobileQuery.matches)),e.xp6(4),e.MGl("src","https://image.tmdb.org/t/p/w300_and_h450_bestv2/",null==t.movie?null:t.movie.poster_path,"",e.LSH)("src","https://image.tmdb.org/t/p/w300_and_h450_bestv2/",null==t.movie?null:t.movie.poster_path,"",e.LSH),e.hYB("srcset","https://image.tmdb.org/t/p/w300_and_h450_bestv2/",null==t.movie?null:t.movie.poster_path," 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/",null==t.movie?null:t.movie.poster_path," 2x",e.LSH)("srcset","https://image.tmdb.org/t/p/w300_and_h450_bestv2/",null==t.movie?null:t.movie.poster_path," 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/",null==t.movie?null:t.movie.poster_path," 2x",e.LSH),e.Q6J("alt",null==t.movie?null:t.movie.title),e.xp6(4),e.Oqu(null==t.movie?null:t.movie.title),e.xp6(2),e.Oqu(t.movie.tagline),e.xp6(6),e.Oqu(t.movie.overview),e.xp6(1),e.Q6J("ngIf",t.video),e.xp6(4),e.Q6J("ngForOf",t.movie.genres),e.xp6(5),e.Q6J("ngIf",t.recomendedMovieList.length>0)("ngIfElse",r)}},directives:[m.O5,A.pW,m.mk,c.oO,l.xw,D._,l.yH,c.b8,f.lW,U.Hw,m.sg,x.h,l.Wh,M.Zt,M.Bh,g.uh,g.xY],styles:[".movie-main-container[_ngcontent-%COMP%]{background-size:cover;background-position:center top}.movie-main-data-container[_ngcontent-%COMP%]{padding:30px 0}.movie-main-data-container[_ngcontent-%COMP%]   .movie-main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px;box-shadow:0 0 4px #0003;border-radius:4px}.movie-main-data-container[_ngcontent-%COMP%]   .movie-main-info[_ngcontent-%COMP%]{padding-left:30px;display:flex;flex-wrap:wrap;align-content:center}.movie-main-data-container[_ngcontent-%COMP%]   .movie-main-info[_ngcontent-%COMP%]   .title-subtitle-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:500;color:#fff;font-size:1.1em;font-style:italic;opacity:.8;margin:0}.movie-main-data-container[_ngcontent-%COMP%]   .movie-main-info[_ngcontent-%COMP%]   .play-trailer[_ngcontent-%COMP%]     .mat-button-wrapper{display:flex;align-items:center}.movie-main-data-container[_ngcontent-%COMP%]   .movie-main-info[_ngcontent-%COMP%]   .play-trailer[_ngcontent-%COMP%]     .mat-button-wrapper mat-icon{padding-right:2px}.video-movie-main[_ngcontent-%COMP%]{margin:auto}.video-movie-main[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:55vw;height:64vh}.similar-movies[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:30px 0 20px}@media screen and (max-width: 599px){.movie-main-container[_ngcontent-%COMP%]{height:240px}.movie-main-img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.movie-main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc((50vw - 40px) / 1.5);min-width:calc((45.4545454545vw - 40px) / 1.5);height:calc(50vw - 40px);min-height:calc(50vw - 40px)}.movie-main-data-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;padding:0}.movie-main-data-container[_ngcontent-%COMP%]   .movie-top-section[_ngcontent-%COMP%]{padding:10px}.movie-main-data-container[_ngcontent-%COMP%]   .movie-main-info[_ngcontent-%COMP%]{padding-left:20px}.movie-main-data-container[_ngcontent-%COMP%]   .movie-main-info[_ngcontent-%COMP%]   .play-trailer[_ngcontent-%COMP%]{margin-top:4px}.movie-main-title[_ngcontent-%COMP%]{font-size:1.5rem;margin:0}.similar-movies[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.video-movie-main[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:80vw;height:45vh}}@media screen and (min-width: 600px) and (max-width: 959px){.movie-main-info[_ngcontent-%COMP%]   .play-trailer[_ngcontent-%COMP%]{margin-top:4px}.video-movie-main[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:80vw;height:40vh}}@media screen and (min-width: 960px) and (max-width: 1279px){.video-movie-main[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:80vw;height:40vh}}@media screen and (min-width: 1280px) and (max-width: 1919px){.movie-main-title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;margin:0 0 20px}}"]}),n})()}]}];let W=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(B)],d.Bz]}),n})(),$=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[_.m,W]]}),n})()}}]);