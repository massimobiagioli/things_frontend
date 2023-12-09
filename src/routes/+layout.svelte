<script>
	import '../app.css';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/">Things</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/diagnostic">Diagnostic</a></li>
		</ul>
	</div>
</div>

<slot />
