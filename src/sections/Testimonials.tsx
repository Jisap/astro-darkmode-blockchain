
const testimonials = [
  {
    text: "The user experience is fenomenal, and the support is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: 'Product Manager - BlockLink',
    avatarImage: '/assets/images/avatar-erica-wyatt.jpg',
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It\'s a game-changer for our team.",
    name: 'Noel Baldwin',
    title: 'Lead Developer - BitBridge',
    avatarImage: '/assets/images/avatar-noel-baldwin.jpg',
  },
  {
    text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
    name: 'Harry Bender',
    title: 'CTO - CryptoSolutions',
    avatarImage: '/assets/images/avatar-harry-bender.jpg',
  },
]

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 gap-16">
          {testimonials.map((testimonial, testimonialIndex) => (
              <blockquote key={testimonialIndex}>
                <p className="font-heading text-3xl font-black">
                &ldquo;{testimonial.text}&rdquo;
                </p>
                <cite className="mt-8 block">
                  <div className="flex gap-3 items-center">
                    <div>
                      <div 
                        className="size-16 bg-zinc-700 rounded-full"
                        style={{
                          backgroundImage: `url(${testimonial.avatarImage})`,
                        }}  
                      ></div>
                    </div>
                    <div>
                      <div className="text-lg not-italic font-black">{testimonial.name}</div>
                      <div className="text-zinc-400 non-italic">{testimonial.title}</div>
                    </div>
                  </div>
                </cite>
              </blockquote>
            
          ))}
        </div>
      </div>
    </section>
  )
}