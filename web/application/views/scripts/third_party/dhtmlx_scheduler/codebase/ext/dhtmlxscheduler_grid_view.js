/*
This software is allowed to use under GPL or you need to obtain Commercial or Enterise License
to use it in non-GPL project. Please contact sales@dhtmlx.com for details
*/
(function(){scheduler.grid={sort_rules:{"int":function(b,d,a){return a(b)*1<a(d)*1?1:-1},str:function(b,d,a){return a(b)<a(d)?1:-1},date:function(b,d,a){return new Date(a(b))<new Date(a(d))?1:-1}},_getObjName:function(b){return"grid_"+b},_getViewName:function(b){return b.replace(/^grid_/,"")}}})();
scheduler.createGridView=function(b){function d(a){return!(a!==void 0&&(a*1!=a||a<0))}var a=b.name||"grid",c=scheduler.grid._getObjName(a);scheduler.config[a+"_start"]=b.from||new Date(0);scheduler.config[a+"_end"]=b.to||new Date(9999,1,1);scheduler[c]=b;scheduler[c].defPadding=8;scheduler[c].columns=scheduler[c].fields;delete scheduler[c].fields;for(var e=scheduler[c].columns,f=0;f<e.length;f++){if(d(e[f].width))e[f].initialWidth=e[f].width;d(e[f].paddingLeft)||delete e[f].paddingLeft;d(e[f].paddingRight)||
delete e[f].paddingRight}scheduler[c].select=b.select===void 0?!0:b.select;scheduler.locale.labels[a+"_tab"]===void 0&&(scheduler.locale.labels[a+"_tab"]=scheduler[c].label||scheduler.locale.labels.grid_tab);scheduler[c]._selected_divs=[];scheduler.date[a+"_start"]=function(a){return a};scheduler.date["add_"+a]=function(a,b){var c=new Date(a);c.setMonth(c.getMonth()+b);return c};scheduler.templates[a+"_date"]=function(a,b){return scheduler.templates.day_date(a)+" - "+scheduler.templates.day_date(b)};
scheduler.attachEvent("onTemplatesReady",function(){scheduler.templates[a+"_full_date"]=function(a,b,c){return c._timed?this.day_date(c.start_date,c.end_date,c)+" "+this.event_date(a):scheduler.templates.day_date(a)+" &ndash; "+scheduler.templates.day_date(b)};scheduler.templates[a+"_single_date"]=function(a){return scheduler.templates.day_date(a)+" "+this.event_date(a)};scheduler.attachEvent("onDblClick",function(b){return this._mode==a?(scheduler._click.buttons.details(b),!1):!0});scheduler.attachEvent("onClick",
function(b,d){return this._mode==a&&scheduler[c].select?(scheduler.grid.unselectEvent("",a),scheduler.grid.selectEvent(b,a,d),!1):!0});scheduler.templates[a+"_field"]=function(a,b){return b[a]};scheduler.attachEvent("onSchedulerResize",function(){return this._mode==a?(this[a+"_view"](!0),window.setTimeout(function(){scheduler.callEvent("onAfterSchedulerResize",[])},1),!1):!0});var b=scheduler.render_data;scheduler.render_data=function(d){if(this._mode==a)scheduler.grid._fill_grid_tab(c);else return b.apply(this,
arguments)};var d=scheduler.render_view_data;scheduler.render_view_data=function(){if(this._mode==a)scheduler.grid._gridScrollTop=scheduler._els.dhx_cal_data[0].childNodes[0].scrollTop,scheduler._els.dhx_cal_data[0].childNodes[0].scrollTop=0;scheduler._els.dhx_cal_data[0].style.overflowY="auto";return d.apply(this,arguments)}});scheduler[a+"_view"]=function(b){b?(scheduler._min_date=scheduler[c].paging?scheduler.date[a+"_start"](new Date(scheduler._date)):scheduler.config[a+"_start"],scheduler._max_date=
scheduler[c].paging?scheduler.date.add(scheduler._min_date,1,a):scheduler.config[a+"_end"],scheduler.grid.set_full_view(c),scheduler._els.dhx_cal_date[0].innerHTML=scheduler._min_date>new Date(0)&&scheduler._max_date<new Date(9999,1,1)?scheduler.templates[a+"_date"](scheduler._min_date,scheduler._max_date):"",scheduler.grid._fill_grid_tab(c),scheduler._gridView=c):(scheduler.grid._sort_marker=null,delete scheduler._gridView,scheduler._rendered=[],scheduler[c]._selected_divs=[])}};
scheduler.dblclick_dhx_grid_area=function(){!this.config.readonly&&this.config.dblclick_create&&this.addEventNow()};if(scheduler._click.dhx_cal_header)scheduler._old_header_click=scheduler._click.dhx_cal_header;
scheduler._click.dhx_cal_header=function(b){if(scheduler._gridView){var d=b||window.event,a=scheduler.grid.get_sort_params(d,scheduler._gridView);scheduler.grid.draw_sort_marker(d.originalTarget||d.srcElement,a.dir);scheduler.clear_view();scheduler.grid._fill_grid_tab(scheduler._gridView,a)}else if(scheduler._old_header_click)return scheduler._old_header_click.apply(this,arguments)};
scheduler.grid.selectEvent=function(b,d,a){if(scheduler.callEvent("onBeforeRowSelect",[b,a])){var c=scheduler.grid._getObjName(d);scheduler.for_rendered(b,function(a){a.className+=" dhx_grid_event_selected";scheduler[c]._selected_divs.push(a)});scheduler._select_id=b}};scheduler.grid._unselectDiv=function(b){b.className=b.className.replace(/ dhx_grid_event_selected/,"")};
scheduler.grid.unselectEvent=function(b,d){var a=scheduler.grid._getObjName(d);if(a&&scheduler[a]._selected_divs)if(b)for(c=0;c<scheduler[a]._selected_divs.length;c++){if(scheduler[a]._selected_divs[c].getAttribute("event_id")==b){scheduler.grid._unselectDiv(scheduler[a]._selected_divs[c]);scheduler[a]._selected_divs.slice(c,1);break}}else{for(var c=0;c<scheduler[a]._selected_divs.length;c++)scheduler.grid._unselectDiv(scheduler[a]._selected_divs[c]);scheduler[a]._selected_divs=[]}};
scheduler.grid.get_sort_params=function(b,d){var a=b.originalTarget||b.srcElement;if(a.className=="dhx_grid_view_sort")a=a.parentNode;for(var c=!a.className||a.className.indexOf("dhx_grid_sort_asc")==-1?"asc":"desc",e=0,f=0;f<a.parentNode.childNodes.length;f++)if(a.parentNode.childNodes[f]==a){e=f;break}var i=null;if(scheduler[d].columns[e].template)var g=scheduler[d].columns[e].template,i=function(a){return g(a.start_date,a.end_date,a)};else{var k=scheduler[d].columns[e].id;k=="date"&&(k="start_date");
i=function(a){return a[k]}}var h=scheduler[d].columns[e].sort;typeof h!="function"&&(h=scheduler.grid.sort_rules[h]||scheduler.grid.sort_rules.str);return{dir:c,value:i,rule:h}};
scheduler.grid.draw_sort_marker=function(b,d){if(b.className=="dhx_grid_view_sort")b=b.parentNode;if(scheduler.grid._sort_marker)scheduler.grid._sort_marker.className=scheduler.grid._sort_marker.className.replace(/( )?dhx_grid_sort_(asc|desc)/,""),scheduler.grid._sort_marker.removeChild(scheduler.grid._sort_marker.lastChild);b.className+=" dhx_grid_sort_"+d;scheduler.grid._sort_marker=b;var a="<div class='dhx_grid_view_sort' style='left:"+(+b.style.width.replace("px","")-15+b.offsetLeft)+"px'>&nbsp;</div>";
b.innerHTML+=a};scheduler.grid.sort_grid=function(b){var b=b||{dir:"desc",value:function(a){return a.start_date},rule:scheduler.grid.sort_rules.date},d=scheduler.get_visible_events();b.dir=="desc"?d.sort(function(a,c){return b.rule(a,c,b.value)}):d.sort(function(a,c){return-b.rule(a,c,b.value)});return d};scheduler.grid.set_full_view=function(b){if(b){var d=scheduler.locale.labels,a=scheduler.grid._print_grid_header(b);scheduler._els.dhx_cal_header[0].innerHTML=a;scheduler._table_view=!0;scheduler.set_sizes()}};
scheduler.grid._calcPadding=function(b,d){var a=(b.paddingLeft!==void 0?1*b.paddingLeft:scheduler[d].defPadding)+(b.paddingRight!==void 0?1*b.paddingRight:scheduler[d].defPadding);return a};
scheduler.grid._getStyles=function(b,d){for(var a=[],c="",e=0;d[e];e++)switch(c=d[e]+":",d[e]){case "text-align":b.align&&a.push(c+b.align);break;case "vertical-align":b.valign&&a.push(c+b.valign);break;case "padding-left":b.paddingLeft!=void 0&&a.push(c+(b.paddingLeft||"0")+"px");break;case "padding-left":b.paddingRight!=void 0&&a.push(c+(b.paddingRight||"0")+"px")}return a};
scheduler.grid._fill_grid_tab=function(b,d){for(var a=scheduler._date,c=scheduler.grid.sort_grid(d),e=scheduler[b].columns,f="<div>",i=-2,g=0;g<e.length;g++){var k=scheduler.grid._calcPadding(e[g],b);i+=e[g].width+k;g<e.length-1&&(f+="<div class='dhx_grid_v_border' style='left:"+i+"px'></div>")}f+="</div>";f+="<div class='dhx_grid_area'><table>";for(g=0;g<c.length;g++)f+=scheduler.grid._print_event_row(c[g],b);f+="</table></div>";scheduler._els.dhx_cal_data[0].innerHTML=f;scheduler._els.dhx_cal_data[0].scrollTop=
scheduler.grid._gridScrollTop||0;var h=scheduler._els.dhx_cal_data[0].getElementsByTagName("tr");scheduler._rendered=[];for(g=0;g<h.length;g++)scheduler._rendered[g]=h[g]};
scheduler.grid._print_event_row=function(b,d){var a=[];b.color&&a.push("background:"+b.color);b.textColor&&a.push("color:"+b.textColor);b._text_style&&a.push(b._text_style);scheduler[d].rowHeight&&a.push("height:"+scheduler[d].rowHeight+"px");var c="";a.length&&(c="style='"+a.join(";")+"'");for(var e=scheduler[d].columns,f=scheduler.templates.event_class(b.start_date,b.end_date,b),i="<tr class='dhx_grid_event"+(f?" "+f:"")+"' event_id='"+b.id+"' "+c+">",g=scheduler.grid._getViewName(d),k=["text-align",
"vertical-align","padding-left","padding-right"],h=0;h<e.length;h++){var j;j=e[h].template?e[h].template(b.start_date,b.end_date,b):e[h].id=="date"?scheduler.templates[g+"_full_date"](b.start_date,b.end_date,b):e[h].id=="start_date"||e[h].id=="end_date"?scheduler.templates[g+"_single_date"](b[e[h].id]):scheduler.templates[g+"_field"](e[h].id,b);var l=scheduler.grid._getStyles(e[h],k),m=e[h].css?' class="'+e[h].css+'"':"";i+="<td style='width:"+e[h].width+"px;"+l.join(";")+"' "+m+">"+j+"</td>"}i+=
"<td class='dhx_grid_dummy'></td></tr>";return i};
scheduler.grid._print_grid_header=function(b){for(var d="<div class='dhx_grid_line'>",a=scheduler[b].columns,c=[],e=a.length,f=scheduler._obj.clientWidth-2*a.length-20,i=0;i<a.length;i++){var g=a[i].initialWidth*1;!isNaN(g)&&a[i].initialWidth!=""&&a[i].initialWidth!=null&&typeof a[i].initialWidth!="boolean"?(e--,f-=g,c[i]=g):c[i]=null}for(var k=Math.floor(f/e),h=["text-align","padding-left","padding-right"],j=0;j<a.length;j++){var l=!c[j]?k:c[j];a[j].width=l-scheduler.grid._calcPadding(a[j],b);var m=
scheduler.grid._getStyles(a[j],h);d+="<div style='width:"+(a[j].width-1)+"px;"+m.join(";")+"'>"+(a[j].label===void 0?a[j].id:a[j].label)+"</div>"}d+="</div>";return d};