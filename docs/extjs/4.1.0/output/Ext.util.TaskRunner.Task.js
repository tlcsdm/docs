Ext.data.JsonP.Ext_util_TaskRunner_Task({"tagname":"class","name":"Ext.util.TaskRunner.Task","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"assignment","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Ext.util.TaskRunner.Task","members":{"cfg":[],"property":[{"name":"fireOnStart","tagname":"property","owner":"Ext.util.TaskRunner.Task","meta":{},"id":"property-fireOnStart"},{"name":"stopped","tagname":"property","owner":"Ext.util.TaskRunner.Task","meta":{"private":true},"id":"property-stopped"}],"method":[{"name":"destroy","tagname":"method","owner":"Ext.util.TaskRunner.Task","meta":{},"id":"method-destroy"},{"name":"restart","tagname":"method","owner":"Ext.util.TaskRunner.Task","meta":{},"id":"method-restart"},{"name":"start","tagname":"method","owner":"Ext.util.TaskRunner.Task","meta":{},"id":"method-start"},{"name":"stop","tagname":"method","owner":"Ext.util.TaskRunner.Task","meta":{},"id":"method-stop"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"TaskManager.js","href":"TaskManager.html#Ext-util-TaskRunner-Task"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TaskManager.html#Ext-util-TaskRunner-Task' target='_blank'>TaskManager.js</a></div></pre><div class='doc-contents'><p>由<a href=\"#!/api/Ext.util.TaskRunner-method-newTask\" rel=\"Ext.util.TaskRunner-method-newTask\" class=\"docClass\">Ext.util.TaskRunner.newTask</a>的方法创建此类的实例。</p>\n\n<p>有关配置属性的详细信息，参见<a href=\"#!/api/Ext.util.TaskRunner-method-start\" rel=\"Ext.util.TaskRunner-method-start\" class=\"docClass\">Ext.util.TaskRunner.start</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fireOnStart' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskManager.html#Ext-util-TaskRunner-Task-property-fireOnStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-property-fireOnStart' class='name expandable'>fireOnStart</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>重写默认行为 ...</div><div class='long'><p>重写默认行为</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-stopped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskManager.html#Ext-util-TaskRunner-Task-property-stopped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-property-stopped' class='name expandable'>stopped</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>此标志由stop设置为true。 ...</div><div class='long'><p>此标志由<a href=\"#!/api/Ext.util.TaskRunner.Task-method-stop\" rel=\"Ext.util.TaskRunner.Task-method-stop\" class=\"docClass\">stop</a>设置为<code>true</code>。</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskManager.html#Ext-util-TaskRunner-Task-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>销毁此实例，停止该任务的执行。 ...</div><div class='long'><p>销毁此实例，停止该任务的执行。</p>\n</div></div></div><div id='method-restart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskManager.html#Ext-util-TaskRunner-Task-method-restart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-restart' class='name expandable'>restart</a>( <span class='pre'>[<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> interval]</span> )</div><div class='description'><div class='short'>重新启动这项任务，清除它持续时间、 过期时间和运行次数。 ...</div><div class='long'><p>重新启动这项任务，清除它持续时间、 过期时间和运行次数。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>（可选）重置该任务的时间间隔。</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskManager.html#Ext-util-TaskRunner-Task-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-start' class='name expandable'>start</a>( <span class='pre'>[<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> interval]</span> )</div><div class='description'><div class='short'>如果未启动，请启动此任务。 ...</div><div class='long'><p>如果未启动，请启动此任务。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>（可选）重置该任务的时间间隔。</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskManager.html#Ext-util-TaskRunner-Task-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>停止这项任务。 ...</div><div class='long'><p>停止这项任务。</p>\n</div></div></div></div></div></div></div>"});