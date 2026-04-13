import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export const RegCompleted = ({
  className,
  game,
}: {
  className?: string
  game: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'container mx-auto mt-32 px-4 py-24 text-center',
        className
      )}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        <Check className="ring-foreground/20 text-primary mx-auto mb-8 size-20 rounded-full p-3 ring-4" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {game} Registration <span className="text-primary">Completed!</span>
        <br />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-2 text-xl opacity-75"
      >
        Please check your email for confirmation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {/* <Button className="mt-8" href={`/register/${game}`}>
          Register Again
        </Button> */}
      </motion.div>
    </motion.div>
  )
}
