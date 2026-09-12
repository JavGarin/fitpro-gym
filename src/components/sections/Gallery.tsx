import { useState } from 'react';
import styled from 'styled-components';
import { gallery } from '../../constants';
import { SectionTitle, Dialog, DialogContent } from '../ui';
import { Maximize2 } from 'lucide-react';

const Section = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  border-top: 2px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.media.sm} {
    padding: 7rem 0;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;

  ${({ theme }) => theme.media.sm} {
    padding: 0 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    padding: 0 2rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
`;

const HeaderDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.muted};
  max-width: 28rem;
  line-height: 1.6;

  ${({ theme }) => theme.media.sm} {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.dark.card};
  border: 2px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 0px 0px rgba(255, 255, 255, 0.08);
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: ${({ theme }) => theme.shadows.brutalPrimary};
  }
`;

const CardTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.875rem;
  background-color: ${({ theme }) => theme.colors.dark.surface};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.text.muted};

  .tag {
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
  }
  .zone {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  width: 100%;
  overflow: hidden;
  background-color: #000000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: transform 0.5s ease, filter 0.5s ease;

    ${Card}:hover & {
      filter: grayscale(0%);
      transform: scale(1.05);
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%);
`;

const ZoomButton = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  height: 2rem;
  width: 2rem;
  background-color: rgba(16, 20, 29, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.main};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CaptionBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 900;
    font-size: 1.25rem;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    margin-bottom: 0.25rem;
    transition: color ${({ theme }) => theme.transitions.fast};

    ${Card}:hover & {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState<(typeof gallery)[0] | null>(null);

  return (
    <Section id="galería">
      <Container>
        <HeaderRow>
          <SectionTitle tag="04 // TOUR VISUAL">
            INSTALACIONES DE <span className="highlight">ÉLITE</span>
          </SectionTitle>
          <HeaderDesc>
            Espacios diseñados arquitectónicamente para el foco mental, acústica estimulante y máxima biomecánica.
          </HeaderDesc>
        </HeaderRow>

        <Grid>
          {gallery.map((item, idx) => (
            <Card key={idx} onClick={() => setActiveImage(item)}>
              <CardTopBar>
                <span className="tag">{item.tag}</span>
                <span className="zone">ZONE_0{idx + 1}</span>
              </CardTopBar>

              <ImageWrapper>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <ImageOverlay />
                <ZoomButton>
                  <Maximize2 size={16} />
                </ZoomButton>

                <CaptionBox>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </CaptionBox>
              </ImageWrapper>
            </Card>
          ))}
        </Grid>

        {/* Modal de visualización */}
        <Dialog
          open={!!activeImage}
          onOpenChange={(isOpen) => !isOpen && setActiveImage(null)}
        >
          <DialogContent style={{ padding: 0, maxWidth: '48rem' }}>
            {activeImage && (
              <div>
                <div style={{ position: 'relative', aspectRatio: '16 / 9', width: '100%', backgroundColor: '#000' }}>
                  <img
                    src={activeImage.img}
                    alt={activeImage.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      border: '1px solid #FF5E00',
                      backgroundColor: 'rgba(255, 94, 0, 0.1)',
                      padding: '0.25rem 0.5rem',
                      fontFamily: "'Space Grotesk', monospace",
                      fontSize: '0.75rem',
                      color: '#FF5E00',
                      fontWeight: 700,
                      width: 'fit-content',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {activeImage.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.5rem',
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {activeImage.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.875rem',
                      color: '#CBD5E1',
                    }}
                  >
                    {activeImage.desc}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Section>
  );
};