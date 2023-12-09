<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: ({ health } = data);
</script>

<div class="container">
	<div class="collapse bg-base-200">
		<input type="radio" name="diangostic-accordion" />
		<div class="collapse-title text-xl font-medium">Health Check</div>
		<div class="collapse-content">
			<span>Status: </span><span>{health.status}</span>
		</div>
	</div>
</div>
