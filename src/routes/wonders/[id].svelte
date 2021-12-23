<script context="module">
    import wondersJSON from '../../../wonders.json';

    export async function load(ctx) {
        return {
            props: {
                wonder: wondersJSON[ctx.page.params.id - 1]
            }
        }
    }
    
</script>

<script>
    export let wonder;
</script>

<section class="col-md-6 offset-md-3" style="font-size: 2.5ch;">
    <h1>{ wonder.name }</h1>
    <p>{ wonder.description[0] }</p>
    <img src="/static/{ wonder.images[4] }" class="mx-auto d-block" alt="" style="width: 100%; border-radius: 2%; margin: 2%;">
    <h2>О памятнике архитектуры</h2>
    <p>{ wonder.description[1] }</p>
    <p>{ wonder.description[2] }</p>
    <img src="/static/{ wonder.images[5] }" class="mx-auto d-block" alt="" style="width: 100%; border-radius: 2%; margin: 2%;">
    <p>{ wonder.description[3] }</p>
    <p>{ wonder.description[4] }</p>
    <img src="/static/{ wonder.images[6] }" class="mx-auto d-block" alt="" style="width: 100%; border-radius: 2%; margin: 2%;">
    <p>{ wonder.description[5] }</p>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style="max-height: 500px; border-radius: 2%;">
            <div class="carousel-item active">
                <img src="/static/{ wonder.images[1] }" class="d-block w-100" alt="" style="overflow: hidden; object-fit: cover;">
            </div>
            <div class="carousel-item">
                <img src="/static/{ wonder.images[2] }" class="d-block w-100" alt="" style="overflow: hidden; object-fit: cover;">
            </div>
            <div class="carousel-item">
                <img src="/static/{ wonder.images[3] }" class="d-block w-100" alt="" style="overflow: hidden; object-fit: cover;">
            </div>
            <div class="carousel-item">
                <img src="/static/{ wonder.images[7] }" class="d-block w-100" alt="" style="overflow: hidden; object-fit: cover;">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
</section>