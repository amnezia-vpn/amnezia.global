import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, Embla } from '@mantine/carousel';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Image } from '@mantine/core';
import { StepItem } from '@src/pages/instructions/ui/HostingInstructions/ui/SingleHostingInstruction/SingleHostingInstruction';
import { useCallback, useState } from 'react';
import SliderExternalControlDots from '@src/pages/instructions/ui/HostingInstructions/ui/HostingSlider/ui/SliderExternalControlDots/SliderExternalControlDots';
import ImageModal from '@src/components/ImageModal/ImageModal';
import styles from './HostingSlider.module.scss';

interface HostingSliderProps {
  steps: StepItem[];
}

const HostingSlider = ({ steps }: HostingSliderProps) => {
  const [emblaApi, setEmblaApi] = useState<Embla | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const isMobileQuery = useMediaQuery('(max-width: 1023.98px)');

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const [opened, { open, close }] = useDisclosure(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleSlideClick = (e: any) => {
    setImageUrl(e.target.getAttribute('src'));
    open();
  };

  return (
    <div className={styles.root}>
      <ImageModal opened={opened} close={close} imageUrl={imageUrl} />
      <div className={styles.carouselWrapper}>
        <Carousel
          mt={30}
          withControls={!isMobileQuery}
          controlsOffset={0}
          controlSize={50}
          slideSize="90%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '90%', slideGap: 6 }]}
          slideGap={16}
          nextControlIcon={<ChevronRight size={36} />}
          previousControlIcon={<ChevronLeft size={36} />}
          getEmblaApi={setEmblaApi}
          onSlideChange={(e) => {
            // mantine api over embla
            setCurrentSlideIndex(e);
          }}
          classNames={{
            controls: styles.crslControls,
            control: styles.crslControl,
            // indicators: styles.crslIndicators,
            indicator: styles.crslIndicator,
          }}
        >
          {steps.map((step, stepIndex) => (
            <Carousel.Slide key={stepIndex}>
              <Image
                onClick={currentSlideIndex === stepIndex ? handleSlideClick : undefined}
                opacity={currentSlideIndex === stepIndex ? 1 : 0.3}
                classNames={{
                  root: styles.imageRoot,
                }}
                radius="16px"
                src={step.image}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <div className={styles.imageCaption}>{steps[currentSlideIndex].text}</div>
      <SliderExternalControlDots
        currentDot={currentSlideIndex}
        totalDots={steps.length}
        action={scrollTo}
      />
    </div>
  );
};

export default HostingSlider;
