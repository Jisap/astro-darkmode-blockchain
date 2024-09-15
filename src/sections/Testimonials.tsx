


export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div>
          {[...new Array(3).fill(0).map((_, index) => (
            <div>
              <blockquote>
                <p className="font-heading text-3xl font-black">
                  &ldquo;The user experience is fenomenal, and the support is always there to help. Highly recommended!&rdquo;
                </p>
                <cite className="mt-8 block">
                  <div>
                    <div>
                      <div className="size-16 bg-zinc-700 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-lg not-italic font-black">Erica Wyatt</div>
                      <div className="text-zinc-400 non-italic">Product Manager - BlockLink</div>
                    </div>
                  </div>
                </cite>
              </blockquote>
            </div>
          ))]}
        </div>
      </div>
    </section>
  )
}